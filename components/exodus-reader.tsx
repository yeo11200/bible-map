'use client';

import { useEffect, useRef } from 'react';

type ExodusReaderProps = {
  chapters: Record<string, { verse: number; text: string }[]>;
  chapter: number;
  onChapterChange: (chapter: number) => void;
};

export function ExodusReader({ chapters, chapter, onChapterChange }: ExodusReaderProps) {
  const chapterTextRef = useRef<HTMLDivElement>(null);
  const chapterNumbers = Object.keys(chapters).map(Number);
  const verses = chapters[String(chapter)];

  useEffect(() => {
    if (chapterTextRef.current) chapterTextRef.current.scrollTop = 0;
  }, [chapter]);

  return (
    <section className="romans-reader" aria-label="출애굽기 전체 본문">
      <h2>출애굽기 전체</h2>
      <div className="chapter-picker" aria-label="출애굽기 장 선택">
        {chapterNumbers.map((number) => (
          <button key={number} type="button" aria-pressed={chapter === number} onClick={() => onChapterChange(number)}>
            {number}장
          </button>
        ))}
      </div>
      <h3>출애굽기 {chapter}장</h3>
      <div ref={chapterTextRef} className="chapter-text">
        {verses.map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}
      </div>
    </section>
  );
}
