'use client';

import { useEffect, useRef, useState } from 'react';

import { getMapLayerColor, getMapPlaceLabel } from '../lib/map-style';

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
  legend?: { label: string; color: string }[];
};

type MapController = {
  flyTo: (options: { center: [number, number]; zoom: number; duration?: number }) => void;
  remove: () => void;
  setPaintProperty: (layer: string, property: string, value: unknown) => void;
};

const getCircleRadius = (selectedId: string) => ['match', ['get', 'id'], selectedId, 16, 11];
const getLabelOpacity = (selectedId: string, isCompact: boolean) => isCompact ? ['match', ['get', 'id'], selectedId, 1, 0] : 1;

export function BibleMap({ items, selectedId, onSelect, mapUrl, ariaLabel, initialView = DEFAULT_INITIAL_VIEW, legend }: BibleMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapController | null>(null);
  const itemsRef = useRef(items);
  const onSelectRef = useRef(onSelect);
  const selectedIdRef = useRef(selectedId);
  const initialViewRef = useRef(initialView);
  const [isCompact, setIsCompact] = useState(false);
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => { onSelectRef.current = onSelect; }, [onSelect]);
  useEffect(() => { selectedIdRef.current = selectedId; mapRef.current?.setPaintProperty('romans-places', 'circle-radius', getCircleRadius(selectedId)); mapRef.current?.setPaintProperty('romans-place-labels', 'text-opacity', getLabelOpacity(selectedId, isCompact)); }, [isCompact, selectedId]);
  useEffect(() => { initialViewRef.current = initialView; mapRef.current?.flyTo({ ...initialView, duration: 350 }); }, [initialView]);
  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const handleChangeViewport = () => setIsCompact(mediaQuery.matches);
    handleChangeViewport();
    mediaQuery.addEventListener('change', handleChangeViewport);
    return () => mediaQuery.removeEventListener('change', handleChangeViewport);
  }, []);

  useEffect(() => {
    if (!key || !mapContainerRef.current) return;

    let removeMap: (() => void) | undefined;
    void import('maplibre-gl').then(({ default: maplibregl }) => {
      if (!mapContainerRef.current) return;
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
        center: initialViewRef.current.center,
        zoom: initialViewRef.current.zoom,
      });

      map.on('load', () => {
        mapRef.current = map;
        void fetch(mapUrl).then((response) => response.json()).then((mapGeoJson) => {
          const placeLabels = Object.fromEntries(itemsRef.current.map((item) => [item.id, getMapPlaceLabel(item.title)]));
          const mapDataWithPlaceLabels = {
            ...mapGeoJson,
            features: mapGeoJson.features.map((feature: { geometry: { type: string }; properties?: { id?: string } }) => ({
              ...feature,
              properties: {
                ...feature.properties,
                title: feature.geometry.type === 'Point' && feature.properties?.id ? placeLabels[feature.properties.id] : undefined,
              },
            })),
          };
          map.addSource('romans-context', { type: 'geojson', data: mapDataWithPlaceLabels });
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
            'circle-color': ['match', ['get', 'layer'], 'RECIPIENT', getMapLayerColor('RECIPIENT'), 'WRITING_CONTEXT', getMapLayerColor('WRITING_CONTEXT'), 'EVENT', getMapLayerColor('EVENT'), 'JOURNEY', getMapLayerColor('JOURNEY'), 'UNCERTAIN', getMapLayerColor('UNCERTAIN'), 'CHURCH', getMapLayerColor('CHURCH'), 'MISSION', getMapLayerColor('MISSION'), 'ROME', getMapLayerColor('ROME'), 'CROSSING', getMapLayerColor('CROSSING'), 'CONQUEST', getMapLayerColor('CONQUEST'), 'INHERITANCE', getMapLayerColor('INHERITANCE'), '#765e9c'],
            'circle-radius': getCircleRadius(selectedIdRef.current) as never,
            'circle-stroke-width': 3,
            'circle-stroke-color': '#fffdf8',
          },
        });
          map.addLayer({
          id: 'romans-place-labels',
          type: 'symbol',
          source: 'romans-context',
          filter: ['all', ['==', '$type', 'Point'], ['has', 'title']],
          layout: {
            'text-field': ['get', 'title'],
            'text-font': ['Noto Sans Regular'],
            'text-size': 13,
            'text-offset': [0, 1.5],
            'text-anchor': 'top',
            'text-allow-overlap': true,
            'text-ignore-placement': true,
          },
          paint: { 'text-color': '#302a22', 'text-halo-color': '#fffdf8', 'text-halo-width': 2, 'text-opacity': getLabelOpacity(selectedIdRef.current, isCompact) as never },
        });
          map.on('click', 'romans-places', (event) => {
          const id = event.features?.[0]?.properties?.id;
          if (typeof id === 'string') onSelectRef.current(id);
        });
          map.on('mouseenter', 'romans-places', () => { map.getCanvas().style.cursor = 'pointer'; });
          map.on('mouseleave', 'romans-places', () => { map.getCanvas().style.cursor = ''; });
        });
      });
      removeMap = () => { mapRef.current = null; map.remove(); };
    });

    return () => removeMap?.();
  }, [key, mapUrl]);

  return (
    <section className="map-stage" aria-label={ariaLabel}>
      <div ref={mapContainerRef} className="map-canvas" />
      {legend && <div className="map-legend" aria-label="지도 색상 범례">{legend.map((item) => <span key={item.label}><i style={{ backgroundColor: item.color }} />{item.label}</span>)}</div>}
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
              {item.title}{item.id === selectedId ? ' · ✓ 선택됨' : ''}
            </button>
          ))}
        </div>
      </div>}
    </section>
  );
}
