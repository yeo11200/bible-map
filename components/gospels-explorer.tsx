'use client';

import { useEffect, useState } from 'react';

import type { GospelId, GospelMode, GospelsContextItem } from '../data/gospels-context';
import { gospelBookNames } from '../data/gospels-context';
import { BibleMap } from './bible-map';
import { MobileContextPanel } from './mobile-context-panel';

type GospelBook = { book: string; chapters: Record<string, { verse: number; text: string }[]> };
type GospelsData = { modes: GospelMode[]; contextItems: GospelsContextItem[]; books: Record<GospelId, GospelBook> };

const GOSPELS_INITIAL_VIEW = { center: [35.36, 32.38] as [number, number], zoom: 7 };
const legend = [
  { label: '마태복음', color: '#984f2a' },
  { label: '마가복음', color: '#3e6d83' },
  { label: '누가복음', color: '#765e9c' },
  { label: '요한복음', color: '#3f7a50' },
];

const handleGetReaderGospel = (modeId: GospelMode['id'], selectedItem: GospelsContextItem): GospelId => modeId === 'whole-journey' ? selectedItem.verseReferences[0].book : modeId;

export function GospelsExplorer() {
  const [data, setData] = useState<GospelsData>();
  const [modeId, setModeId] = useState<GospelMode['id']>('whole-journey');
  const [selectedId, setSelectedId] = useState<string>();
  const [chapter, setChapter] = useState(1);

  useEffect(() => { void fetch('/api/books/gospels').then((response) => response.ok ? response.json() : undefined).then(setData); }, []);

  if (!data) return <main className="explorer" aria-busy="true">공생애 여정을 준비하고 있습니다.</main>;

  const items = data.contextItems.filter((item) => modeId === 'whole-journey' || item.gospels.includes(modeId));
  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];
  const readerGospel = handleGetReaderGospel(modeId, selectedItem);
  const readerBook = data.books[readerGospel];
  const mode = data.modes.find((item) => item.id === modeId);
  const references = selectedItem.verseReferences.filter((reference) => modeId === 'whole-journey' || reference.book === modeId);

  const handleChangeMode = (nextModeId: GospelMode['id']) => {
    setModeId(nextModeId);
    setSelectedId(undefined);
    setChapter(1);
  };

  const handleSelectPlace = (id: string) => {
    setSelectedId(id);
    const item = items.find((place) => place.id === id);
    if (item) setChapter(item.verseReferences.find((reference) => reference.book === modeId)?.chapter ?? item.verseReferences[0].chapter);
  };

  return <main className="explorer">
    <BibleMap items={items} selectedId={selectedItem.id} onSelect={handleSelectPlace} mapUrl="/api/books/gospels/map" ariaLabel="예수님의 공생애 지도" initialView={GOSPELS_INITIAL_VIEW} legend={legend} />
    <MobileContextPanel title={selectedItem.title}>
      <div className="mode-tabs" aria-label="공생애 복음서 선택">{data.modes.map((item) => <button key={item.id} type="button" aria-pressed={item.id === modeId} onClick={() => handleChangeMode(item.id)}>{item.label}</button>)}</div>
      <p className="layer-label">{modeId === 'whole-journey' ? mode?.description : `${gospelBookNames[modeId]}에 기록된 공생애 장소와 사건을 봅니다.`}</p>
      <div className="gospel-chips" aria-label="기록 복음서">{selectedItem.gospels.map((gospel) => <span key={gospel} data-gospel={gospel}>{gospelBookNames[gospel].replace('복음', '')}</span>)}</div>
      <h1>{selectedItem.title}</h1>
      <p>{selectedItem.summary}</p>
      <h2>연관 성경 구절</h2>
      <ul>{selectedItem.scriptureReferences.map((reference) => <li key={reference}>{reference}</li>)}</ul>
      <div className="scripture-text">{references.map((reference) => <section key={`${reference.book}-${reference.chapter}`}><h3>{gospelBookNames[reference.book]} {reference.chapter}:{reference.verses.join(', ')}</h3>{data.books[reference.book].chapters[String(reference.chapter)].filter(({ verse }) => reference.verses.includes(verse)).map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}</section>)}</div>
      <section className="romans-reader" aria-label="복음서 전체 본문">
        <h2>{readerBook.book} 전체</h2>
        <div className="chapter-picker" aria-label={`${readerBook.book} 장 선택`}>{Object.keys(readerBook.chapters).map(Number).map((number) => <button key={number} type="button" aria-pressed={chapter === number} onClick={() => setChapter(number)}>{number}장</button>)}</div>
        <h3>{readerBook.book} {chapter}장</h3>
        <div className="chapter-text">{readerBook.chapters[String(chapter)].map(({ verse, text }) => <p key={verse}><sup>{verse}</sup>{text}</p>)}</div>
      </section>
    </MobileContextPanel>
  </main>;
}
