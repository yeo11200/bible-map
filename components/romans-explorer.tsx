'use client';

import { useEffect, useState } from 'react';

import type { ContextItem } from '../data/romans-context';
import { BibleMap } from './bible-map';
import { ContextPanel } from './context-panel';

type RomansChapters = Record<string, { verse: number; text: string }[]>;

type RomansData = {
  contextItems: ContextItem[];
  chapters: RomansChapters;
};

export function RomansExplorer() {
  const [data, setData] = useState<RomansData>();
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    let isMounted = true;

    const handleLoadRomansData = async () => {
      const response = await fetch('/api/books/romans');
      if (!response.ok) return;

      const nextData = (await response.json()) as RomansData;
      if (isMounted) setData(nextData);
    };

    void handleLoadRomansData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!data || data.contextItems.length === 0) {
    return <main className="explorer" aria-busy="true">로마서 지도를 준비하고 있습니다.</main>;
  }

  const initialItem = data.contextItems[0];
  const selectedItem = data.contextItems.find((item) => item.id === selectedId) ?? initialItem;

  return (
    <main className="explorer">
      <BibleMap items={data.contextItems} selectedId={selectedItem.id} onSelect={setSelectedId} />
      <ContextPanel item={selectedItem} chapters={data.chapters} />
    </main>
  );
}
