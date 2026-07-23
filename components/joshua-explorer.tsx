'use client';

import { useEffect, useState } from 'react';

import type { JoshuaContextItem, JoshuaMode } from '../data/joshua-context';
import { BibleMap } from './bible-map';

const JOSHUA_INITIAL_VIEW = { center: [35.2, 32.1] as [number, number], zoom: 7 };
const legend = [
  { label: '요단 도하', color: '#3e6d83' },
  { label: '가나안 정복', color: '#984f2a' },
  { label: '땅 분배·언약', color: '#765e9c' },
];

type JoshuaData = {
  modes: JoshuaMode[];
  contextItems: JoshuaContextItem[];
  chapters: Record<string, { verse: number; text: string }[]>;
};

export function JoshuaExplorer() {
  const [data, setData] = useState<JoshuaData>();
  const [modeId, setModeId] = useState<JoshuaMode['id']>('whole-journey');
  const [selectedId, setSelectedId] = useState<string>();
  const [chapter, setChapter] = useState(1);

  useEffect(() => {
    const handleLoadJoshuaData = async () => {
      const response = await fetch('/api/books/joshua');
      if (!response.ok) return;
      setData(await response.json() as JoshuaData);
    };

    void handleLoadJoshuaData();
  }, []);

  if (!data) return <main className="explorer" aria-busy="true">여호수아 여정을 준비하고 있습니다.</main>;

  const items = data.contextItems.filter((item) => item.modes.includes(modeId));
  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];

  return (
    <main className="explorer">
      <BibleMap
        items={items}
        selectedId={selectedItem.id}
        onSelect={setSelectedId}
        mapUrl="/api/books/joshua/map"
        ariaLabel="여호수아 지도"
        initialView={JOSHUA_INITIAL_VIEW}
        legend={legend}
      />
      <aside className="context-panel" aria-live="polite">
        <div className="mode-tabs" aria-label="여호수아 탐험 모드">
          {data.modes.map((mode) => (
            <button key={mode.id} type="button" aria-pressed={mode.id === modeId} onClick={() => { setModeId(mode.id); setSelectedId(undefined); }}>
              {mode.label}
            </button>
          ))}
        </div>
        <p className="layer-label">{data.modes.find((mode) => mode.id === modeId)?.description}</p>
        <h1>{selectedItem.title}</h1>
        <p>{selectedItem.summary}</p>
        <h2>연관 성경 구절</h2>
        <ul>{selectedItem.scriptureReferences.map((reference) => <li key={reference}>{reference}</li>)}</ul>
        <div className="scripture-text">
          {selectedItem.verseReferences.map(({ chapter: referenceChapter, verses }) => (
            <section key={referenceChapter}>
              <h3>여호수아 {referenceChapter}:{verses.join(', ')}</h3>
              {data.chapters[String(referenceChapter)].filter(({ verse }) => verses.includes(verse)).map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}
            </section>
          ))}
        </div>
        <section className="chapter-journey">
          <h2>이 지점에서 읽을 장</h2>
          {selectedItem.chapterItems.map((item) => (
            <button key={item.chapter} type="button" onClick={() => setChapter(item.chapter)}>
              <strong>{item.chapter}장 · {item.title}</strong><span>{item.summary}</span>
            </button>
          ))}
        </section>
        <section className="romans-reader" aria-label="여호수아 전체 본문">
          <h2>여호수아 전체</h2>
          <div className="chapter-picker" aria-label="여호수아 장 선택">
            {Object.keys(data.chapters).map(Number).map((number) => <button key={number} type="button" aria-pressed={chapter === number} onClick={() => setChapter(number)}>{number}장</button>)}
          </div>
          <h3>여호수아 {chapter}장</h3>
          <div className="chapter-text">{data.chapters[String(chapter)].map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}</div>
        </section>
      </aside>
    </main>
  );
}
