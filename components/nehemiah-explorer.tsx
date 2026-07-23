'use client';

import { useEffect, useState } from 'react';

import type { NehemiahContextItem, NehemiahMode } from '../data/nehemiah-context';
import { BibleMap } from './bible-map';

const NEHEMIAH_JOURNEY_VIEW = { center: [41.7, 32] as [number, number], zoom: 5 };
const NEHEMIAH_WALL_VIEW = { center: [35.23, 31.78] as [number, number], zoom: 14.5 };
const legend = [
  { label: '부르심·귀환', color: '#3e6d83' },
  { label: '성벽 재건', color: '#984f2a' },
  { label: '말씀·공동체 회복', color: '#765e9c' },
];

type NehemiahData = {
  modes: NehemiahMode[];
  contextItems: NehemiahContextItem[];
  chapters: Record<string, { verse: number; text: string }[]>;
};

export function NehemiahExplorer() {
  const [data, setData] = useState<NehemiahData>();
  const [modeId, setModeId] = useState<NehemiahMode['id']>('whole-journey');
  const [selectedId, setSelectedId] = useState<string>();
  const [chapter, setChapter] = useState(1);

  useEffect(() => {
    const handleLoadNehemiahData = async () => {
      const response = await fetch('/api/books/nehemiah');
      if (!response.ok) return;
      setData(await response.json() as NehemiahData);
    };

    void handleLoadNehemiahData();
  }, []);

  if (!data) return <main className="explorer" aria-busy="true">느헤미야 여정을 준비하고 있습니다.</main>;

  const items = data.contextItems.filter((item) => item.modes.includes(modeId));
  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];
  const initialView = modeId === 'wall-rebuilding' ? NEHEMIAH_WALL_VIEW : NEHEMIAH_JOURNEY_VIEW;

  return (
    <main className="explorer">
      <BibleMap items={items} selectedId={selectedItem.id} onSelect={setSelectedId} mapUrl="/api/books/nehemiah/map" ariaLabel="느헤미야 지도" initialView={initialView} legend={legend} />
      <aside className="context-panel" aria-live="polite">
        <div className="mode-tabs" aria-label="느헤미야 탐험 모드">
          {data.modes.map((mode) => <button key={mode.id} type="button" aria-pressed={mode.id === modeId} onClick={() => { setModeId(mode.id); setSelectedId(undefined); }}>{mode.label}</button>)}
        </div>
        <p className="layer-label">{data.modes.find((mode) => mode.id === modeId)?.description}</p>
        <h1>{selectedItem.title}</h1>
        <p>{selectedItem.summary}</p>
        <h2>연관 성경 구절</h2>
        <ul>{selectedItem.scriptureReferences.map((reference) => <li key={reference}>{reference}</li>)}</ul>
        <div className="scripture-text">{selectedItem.verseReferences.map(({ chapter: referenceChapter, verses }) => <section key={referenceChapter}><h3>느헤미야 {referenceChapter}:{verses.join(', ')}</h3>{data.chapters[String(referenceChapter)].filter(({ verse }) => verses.includes(verse)).map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}</section>)}</div>
        <section className="chapter-journey"><h2>이 지점에서 읽을 장</h2>{selectedItem.chapterItems.map((item) => <button key={item.chapter} type="button" onClick={() => setChapter(item.chapter)}><strong>{item.chapter}장 · {item.title}</strong><span>{item.summary}</span></button>)}</section>
        <section className="romans-reader" aria-label="느헤미야 전체 본문">
          <h2>느헤미야 전체</h2>
          <div className="chapter-picker" aria-label="느헤미야 장 선택">{Object.keys(data.chapters).map(Number).map((number) => <button key={number} type="button" aria-pressed={chapter === number} onClick={() => setChapter(number)}>{number}장</button>)}</div>
          <h3>느헤미야 {chapter}장</h3>
          <div className="chapter-text">{data.chapters[String(chapter)].map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}</div>
        </section>
      </aside>
    </main>
  );
}
