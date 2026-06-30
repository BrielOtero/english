import { useState } from 'react';
import type { Level } from '../types';
import { LEVELS, LEVEL_BLURB } from '../types';
import { GRAMMAR, grammarUnit } from '../content';
import { useStore } from '../store';
import { LevelBadge } from './level-badge';
import { LessonView } from './lesson-view';

const ALL_LESSONS = GRAMMAR.flatMap((u) => u.lessons);

/** Restore the open lesson + its level from the ?lesson= URL param (so refresh keeps your place). */
function lessonFromUrl(): { id: string; level: Level } | null {
  const id = new URLSearchParams(window.location.search).get('lesson');
  const lesson = id ? ALL_LESSONS.find((l) => l.id === id) : undefined;
  return lesson ? { id: lesson.id, level: lesson.level } : null;
}

export function GrammarBrowser() {
  const completed = useStore((s) => s.completed);
  const fromUrl = lessonFromUrl();
  const [level, setLevel] = useState<Level>(fromUrl?.level ?? 'A1');
  const [openId, setOpenId] = useState<string | null>(fromUrl?.id ?? null);

  const unit = grammarUnit(level);
  const openLesson = openId ? ALL_LESSONS.find((l) => l.id === openId) : undefined;

  function openLessonById(id: string) {
    setOpenId(id);
    const url = new URL(window.location.href);
    url.searchParams.set('lesson', id);
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0 });
  }
  function closeLesson() {
    setOpenId(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('lesson');
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0 });
  }

  if (openLesson) {
    return (
      <div className="fade-in">
        <button
          onClick={closeLesson}
          className="press mb-5 flex items-center gap-1.5 text-[13px] font-medium text-ink-mute transition-colors hover:text-ink"
        >
          ← All {openLesson.level} lessons
        </button>
        <LessonView lesson={openLesson} />
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Level selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {LEVELS.map((lvl) => {
          const active = lvl === level;
          const count = grammarUnit(lvl)?.lessons.length ?? 0;
          return (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-colors ${
                active
                  ? 'border-accent bg-accent/10'
                  : 'border-rule-soft bg-paper hover:border-accent/50'
              }`}
            >
              <LevelBadge level={lvl} />
              <span className="font-mono text-[11px] text-ink-mute">{count}</span>
            </button>
          );
        })}
      </div>

      {unit && (
        <>
          <p className="mb-5 max-w-2xl text-[14px] text-ink-soft">{LEVEL_BLURB[level]}</p>
          <div className="grid gap-3">
            {unit.lessons.map((lesson) => {
              const isDone = !!completed[lesson.id];
              return (
                <button
                  key={lesson.id}
                  onClick={() => openLessonById(lesson.id)}
                  className="group rounded-xl border border-rule-soft bg-paper p-4 text-left transition duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[var(--shadow-md)] active:scale-[0.99]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[16px] font-medium text-ink group-hover:text-accent">
                        {lesson.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-[13px] text-ink-soft">{lesson.summary}</p>
                    </div>
                    <span
                      className={`mt-0.5 shrink-0 font-mono text-[11px] ${isDone ? 'text-success' : 'text-ink-mute'}`}
                    >
                      {isDone ? '✓ done' : `${lesson.exercises.length} drills`}
                    </span>
                  </div>
                </button>
              );
            })}
            {unit.lessons.length === 0 && (
              <p className="rounded-xl border border-dashed border-rule-soft bg-paper p-6 text-center text-[13px] text-ink-mute">
                More {level} lessons are on the way.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
