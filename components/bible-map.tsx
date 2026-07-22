'use client';

import { useEffect, useRef } from 'react';

const DEFAULT_INITIAL_VIEW = { center: [17.5, 40] as [number, number], zoom: 4.5 };

type MapItem = {
  id: string;
  title: string;
  layer: string;
};

type BibleMapProps = {
  items: MapItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  mapUrl: string;
  ariaLabel: string;
  initialView?: { center: [number, number]; zoom: number };
};

export function BibleMap({ items, selectedId, onSelect, mapUrl, ariaLabel, initialView = DEFAULT_INITIAL_VIEW }: BibleMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  useEffect(() => {
    if (!key || !mapContainerRef.current) return;

    let removeMap: (() => void) | undefined;
    void import('maplibre-gl').then(({ default: maplibregl }) => {
      if (!mapContainerRef.current) return;
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
        center: initialView.center,
        zoom: initialView.zoom,
      });

      map.on('load', () => {
        void fetch(mapUrl).then((response) => response.json()).then((mapGeoJson) => {
          map.addSource('romans-context', { type: 'geojson', data: mapGeoJson });
          map.addLayer({
          id: 'romans-journey',
          type: 'line',
          source: 'romans-context',
          filter: ['==', '$type', 'LineString'],
          paint: { 'line-color': '#6f3d1f', 'line-width': 4, 'line-dasharray': [2, 1] },
        });
          map.addLayer({
          id: 'romans-places',
          type: 'circle',
          source: 'romans-context',
          filter: ['==', '$type', 'Point'],
          paint: {
            'circle-color': ['match', ['get', 'layer'], 'RECIPIENT', '#984f2a', 'WRITING_CONTEXT', '#3e6d83', 'EVENT', '#984f2a', 'JOURNEY', '#3e6d83', 'UNCERTAIN', '#765e9c', '#765e9c'],
            'circle-radius': 9,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#fffdf8',
          },
        });
          map.on('click', 'romans-places', (event) => {
          const id = event.features?.[0]?.properties?.id;
          if (typeof id === 'string') onSelect(id);
        });
          map.on('mouseenter', 'romans-places', () => { map.getCanvas().style.cursor = 'pointer'; });
          map.on('mouseleave', 'romans-places', () => { map.getCanvas().style.cursor = ''; });
        });
      });
      removeMap = () => map.remove();
    });

    return () => removeMap?.();
  }, [ariaLabel, initialView, key, mapUrl, onSelect]);

  return (
    <section className="map-stage" aria-label={ariaLabel}>
      <div ref={mapContainerRef} className="map-canvas" />
      {!key && <div className="map-fallback">
        <p>지도 키를 연결하면 MapTiler 지도가 이곳에 표시됩니다.</p>
        <div className="place-list" aria-label="지도 하이라이트">
          {items.map((item) => (
            <button
              key={item.id}
              className="place-button"
              type="button"
              aria-pressed={item.id === selectedId}
              onClick={() => onSelect(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>}
    </section>
  );
}
