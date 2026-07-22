'use client';

import { useEffect, useState } from 'react';

import type { ActsContextItem, ActsMode } from '../data/acts-context';
import { BibleMap } from './bible-map';

const ACTS_INITIAL_VIEW = { center: [20, 37] as [number, number], zoom: 4 };
const legend = [
  { label: '교회 탄생·확장', color: '#984f2a' },
  { label: '바울 선교 여행', color: '#3e6d83' },
  { label: '로마행', color: '#765e9c' },
];

export function ActsExplorer() {
  const [data, setData] = useState<{ modes: ActsMode[]; contextItems: ActsContextItem[]; chapters: Record<string, { verse: number; text: string }[]> }>();
  const [modeId, setModeId] = useState<ActsMode['id']>('whole-journey');
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => { void fetch('/api/books/acts').then((response) => response.ok ? response.json() : undefined).then(setData); }, []);

  if (!data) return <main className="explorer" aria-busy="true">사도행전 여정을 준비하고 있습니다.</main>;

  const items = data.contextItems.filter((item) => item.modes.includes(modeId));
  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];

  return <main className="explorer">
    <BibleMap items={items} selectedId={selectedItem.id} onSelect={setSelectedId} mapUrl="/api/books/acts/map" ariaLabel="사도행전 지도" initialView={ACTS_INITIAL_VIEW} legend={legend} />
    <aside className="context-panel" aria-live="polite">
      <div className="mode-tabs" aria-label="사도행전 탐험 모드">{data.modes.map((mode) => <button key={mode.id} type="button" aria-pressed={mode.id === modeId} onClick={() => { setModeId(mode.id); setSelectedId(undefined); }}>{mode.label}</button>)}</div>
      <p className="layer-label">{data.modes.find((mode) => mode.id === modeId)?.description}</p>
      <h1>{selectedItem.title}</h1>
      <p>{selectedItem.summary}</p>
      <h2>연관 성경 구절</h2>
      <ul>{selectedItem.scriptureReferences.map((reference) => <li key={reference}>{reference}</li>)}</ul>
      <div className="scripture-text">{selectedItem.verseReferences.map(({ chapter, verses }) => <section key={chapter}><h3>사도행전 {chapter}:{verses.join(', ')}</h3>{data.chapters[String(chapter)].filter(({ verse }) => verses.includes(verse)).map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}</section>)}</div>
      <section className="chapter-journey"><h2>이 지점에서 읽을 장</h2>{selectedItem.chapterItems.map((item) => <button key={item.chapter} type="button"><strong>{item.chapter}장 · {item.title}</strong><span>{item.summary}</span></button>)}</section>
    </aside>
  </main>;
}
