'use client';

import { useEffect, useState } from 'react';

import type { ExodusContextItem } from '../data/exodus-context';
import { BibleMap } from './bible-map';
import { ExodusContextPanel } from './exodus-context-panel';

const EXODUS_INITIAL_VIEW = { center: [33, 29] as [number, number], zoom: 6 };

export function ExodusExplorer() {
  const [items, setItems] = useState<ExodusContextItem[]>();
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    const handleLoadExodusData = async () => {
      const response = await fetch('/api/books/exodus');
      if (!response.ok) return;

      const data = (await response.json()) as { contextItems: ExodusContextItem[] };
      setItems(data.contextItems);
    };

    void handleLoadExodusData();
  }, []);

  if (!items || items.length === 0) return <main className="explorer" aria-busy="true">출애굽 여정을 준비하고 있습니다.</main>;

  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];

  return (
    <main className="explorer">
      <BibleMap
        items={items}
        selectedId={selectedItem.id}
        onSelect={setSelectedId}
        mapUrl="/api/books/exodus/map"
        ariaLabel="출애굽 여정 지도"
        initialView={EXODUS_INITIAL_VIEW}
      />
      <ExodusContextPanel item={selectedItem} />
    </main>
  );
}
