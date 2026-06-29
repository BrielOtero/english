// Tolerant answer-checking for free-text exercises (cloze, correction, translation,
// dictation). We normalize away the things a self-study learner shouldn't be marked
// wrong for — case, surrounding punctuation, smart quotes, doubled spaces — then
// compare against a list of accepted answers.

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’]/g, "'") // curly → straight apostrophes
    .replace(/[“”]/g, '"')
    .replace(/[.,!?;:"]/g, '') // drop sentence punctuation
    .replace(/\s+/g, ' ')
    .trim();
}

/** True if `input` matches any accepted answer after normalization. */
export function matches(input: string, accepted: string[]): boolean {
  const n = normalize(input);
  return accepted.some((a) => normalize(a) === n);
}
