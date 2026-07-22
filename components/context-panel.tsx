'use client';

import { useEffect, useRef } from 'react';
import type { ContextItem } from '../data/romans-context';
import { RomansReader } from './romans-reader';

const layerLabels: Record<ContextItem['layer'], string> = {
  RECIPIENT: '편지의 수신지',
  WRITING_CONTEXT: '기록 배경',
  RELATED_HISTORICAL_EVENT: '연결된 역사적 사건',
};

type ContextPanelProps = {
  item: ContextItem;
  chapters: Record<string, { verse: number; text: string }[]>;
};

export function ContextPanel({ item, chapters }: ContextPanelProps) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [item.id]);

  return (
    <aside ref={panelRef} aria-live="polite" className="context-panel">
      <p className="layer-label">{layerLabels[item.layer]}</p>
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
      <h2>연관 성경 구절</h2>
      <ul>
        {item.scriptureReferences.map((reference) => (
          <li key={reference}>{reference}</li>
        ))}
      </ul>
      <div className="scripture-text">
        {item.verseReferences.map(({ chapter, verses }) => {
          const chapterVerses = chapters[String(chapter)];

          return (
            <section key={chapter}>
              <h3>로마서 {chapter}:{verses.join(', ')}</h3>
              {chapterVerses.filter(({ verse }) => verses.includes(verse)).map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}
            </section>
          );
        })}
      </div>
      <RomansReader chapters={chapters} />
    </aside>
  );
}
