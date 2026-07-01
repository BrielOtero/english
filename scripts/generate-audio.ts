// Pre-generate an audio clip for every spoken English phrase in the course, using a
// high-quality free neural voice (Microsoft Edge TTS, no API key). Clips are written
// to public/audio/<hash>.mp3 and a manifest of hashes to src/content/audio-manifest.ts.
// The app plays these files at runtime (lib/audio.ts), falling back to the browser's
// speech synthesis for anything not pre-generated (e.g. text the learner types).
//
//   pnpm generate:audio          generate any missing clips + write the manifest
//   pnpm generate:audio --count  just report how many unique phrases there are
//
import { mkdirSync, existsSync, createWriteStream, writeFileSync } from 'node:fs';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import type { Exercise } from '../src/types.ts';
import { hashText } from '../src/lib/audio-hash.ts';
import {
  GRAMMAR,
  VOCAB_SETS,
  SOUNDS,
  PHRASAL,
  IDIOMS,
  READINGS,
  WRITING,
} from '../src/content/index.ts';

const VOICE = 'en-US-AndrewMultilingualNeural';
const FORMAT = OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3;
const OUT_DIR = 'public/audio';
const MANIFEST = 'src/content/audio-manifest.ts';
const POOL = 8;

/** The spoken "correct answer" of an exercise — must match exercise.tsx exactly. */
function modelAnswer(ex: Exercise): string {
  switch (ex.kind) {
    case 'mcq':
      return ex.options[ex.answer];
    case 'cloze':
      return `${ex.before} ${ex.answers[0]} ${ex.after}`.replace(/\s+/g, ' ').trim();
    case 'correct':
      return ex.answers[0];
    case 'order':
      return ex.answer;
    case 'dictation':
      return ex.text;
  }
}

/** Collect every English string that a Listen button anywhere in the app can speak. */
function collectPhrases(): string[] {
  const set = new Set<string>();
  const add = (s: string | undefined) => {
    if (s && s.trim()) set.add(s);
  };

  for (const unit of GRAMMAR) {
    for (const lesson of unit.lessons) {
      for (const ex of lesson.examples) add(ex.en);
      for (const sec of lesson.sections) for (const ex of sec.examples ?? []) add(ex.en);
      // The spoken "Answer: …" reveal (and dictation text) for every exercise.
      for (const ex of lesson.exercises) add(modelAnswer(ex));
    }
  }
  for (const s of VOCAB_SETS) for (const item of s.items) add(item.word);
  for (const sound of SOUNDS) {
    for (const w of sound.examples) add(w);
    for (const p of sound.pairs) {
      add(p.a);
      add(p.b);
    }
  }
  for (const pv of PHRASAL) add(pv.verb);
  for (const idiom of IDIOMS) add(idiom.phrase);
  for (const r of READINGS) {
    for (const para of r.paragraphs) add(para);
    for (const q of r.questions) add(modelAnswer(q));
  }
  for (const w of WRITING) for (const ph of w.usefulPhrases) add(ph.en);

  return [...set];
}

/** Tidy a phrase for speech without changing the text we key the file by. */
function cleanForTts(text: string): string {
  // "I am a teacher. / I'm a teacher." → spoken as two clauses, not "... slash ...".
  return text.replaceAll(' / ', ', ').replace(/\s+/g, ' ').trim();
}

function synth(tts: MsEdgeTTS, text: string, file: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const { audioStream } = tts.toStream(cleanForTts(text));
    const out = createWriteStream(file);
    let bytes = 0;
    const timer = setTimeout(() => reject(new Error('timeout')), 30_000);
    audioStream.on('data', (c: Buffer) => {
      bytes += c.length;
      out.write(c);
    });
    audioStream.on('end', () => {
      clearTimeout(timer);
      out.end();
      if (bytes > 0) resolve();
      else reject(new Error('empty'));
    });
    audioStream.on('error', (e: Error) => {
      clearTimeout(timer);
      reject(e);
    });
  });
}

async function freshTts(): Promise<MsEdgeTTS> {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, FORMAT);
  return tts;
}

async function main() {
  const phrases = collectPhrases();
  const countOnly = process.argv.includes('--count');
  console.log(`${phrases.length} unique phrases.`);
  if (countOnly) {
    console.log('Sample:', phrases.slice(0, 8));
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const todo = phrases.filter((t) => !existsSync(`${OUT_DIR}/${hashText(t)}.mp3`));
  console.log(`${todo.length} to generate (${phrases.length - todo.length} already exist).`);

  let i = 0;
  let done = 0;
  let failed = 0;
  async function worker() {
    let tts = await freshTts();
    let onSocket = 0;
    while (i < todo.length) {
      const text = todo[i++];
      const file = `${OUT_DIR}/${hashText(text)}.mp3`;
      try {
        // Refresh the socket periodically to avoid stale-connection errors.
        if (onSocket >= 40) {
          tts = await freshTts();
          onSocket = 0;
        }
        await synth(tts, text, file);
        onSocket++;
      } catch {
        try {
          tts = await freshTts();
          onSocket = 0;
          await synth(tts, text, file);
        } catch (e) {
          failed++;
          console.error('FAIL:', JSON.stringify(text.slice(0, 50)), (e as Error).message);
        }
      }
      if (++done % 50 === 0) console.log(`  ${done}/${todo.length}`);
    }
  }
  await Promise.all(Array.from({ length: POOL }, worker));

  // Manifest = hashes of every phrase that now has a file.
  const hashes = phrases.filter((t) => existsSync(`${OUT_DIR}/${hashText(t)}.mp3`)).map(hashText);
  writeFileSync(
    MANIFEST,
    `// AUTO-GENERATED by scripts/generate-audio.ts — do not edit by hand.\n` +
      `// Hashes (see lib/audio-hash.ts) of phrases that have a pre-generated clip in public/audio.\n` +
      `export const AUDIO_HASHES: readonly string[] = ${JSON.stringify(hashes.sort(), null, 0)};\n`,
  );
  console.log(`Done. ${hashes.length} clips, ${failed} failed. Manifest written to ${MANIFEST}.`);
}

await main();
