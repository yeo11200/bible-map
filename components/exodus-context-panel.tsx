'use client';

import { useEffect, useRef, useState } from 'react';

import type { ExodusContextItem } from '../data/exodus-context';
import { ExodusReader } from './exodus-reader';

type ExodusContextPanelProps = {
  item: ExodusContextItem;
  chapters: Record<string, { verse: number; text: string }[]>;
};

export function ExodusContextPanel({ item, chapters }: ExodusContextPanelProps) {
  const panelRef = useRef<HTMLElement>(null);
  const [readerChapter, setReaderChapter] = useState(item.chapterItems[0].chapter);

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
    setReaderChapter(item.chapterItems[0].chapter);
  }, [item.id]);

  return (
    <aside ref={panelRef} aria-live="polite" className="context-panel">
      <p className="layer-label">출애굽 여정 {item.sequence}단계 · {item.certainty === 'UNCERTAIN' ? '추정 위치' : '전통적 여정 맥락'}</p>
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
      <h2>연관 성경 구절</h2>
      <ul>{item.scriptureReferences.map((reference) => <li key={reference}>{reference}</li>)}</ul>
      <div className="scripture-text">
        {item.verseReferences.map(({ chapter, verses }) => (
          <section key={chapter}>
            <h3>출애굽기 {chapter}:{verses.join(', ')}</h3>
            {chapters[String(chapter)].filter(({ verse }) => verses.includes(verse)).map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}
          </section>
        ))}
      </div>
      <section className="chapter-journey" aria-label="이 지점에서 읽을 장">
        <h2>이 지점에서 읽을 장</h2>
        {item.chapterItems.map((chapterItem) => (
          <button
            key={chapterItem.chapter}
            type="button"
            aria-pressed={readerChapter === chapterItem.chapter}
            onClick={() => setReaderChapter(chapterItem.chapter)}
          >
            {chapterItem.chapter}장 · {chapterItem.title}
          </button>
        ))}
      </section>
      <ExodusReader chapters={chapters} chapter={readerChapter} onChapterChange={setReaderChapter} />
      <div className="scripture-text">
        <h2>지도 읽기 안내</h2>
        <p>이 지도는 출애굽기의 사건 흐름을 돕기 위한 교육용 표현입니다. 정확한 위치가 합의되지 않은 지점은 추정 위치로 표시합니다.</p>
      </div>
    </aside>
  );
}
