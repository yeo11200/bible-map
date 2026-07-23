import { describe, expect, it } from 'vitest';

import { getMapLayerColor, getMapPlaceLabel } from './map-style';

describe('getMapLayerColor', () => {
  it('gives the Joshua crossing, conquest, and inheritance stages distinct colors', () => {
    expect(getMapLayerColor('CROSSING')).toBe('#3e6d83');
    expect(getMapLayerColor('CONQUEST')).toBe('#984f2a');
    expect(getMapLayerColor('INHERITANCE')).toBe('#765e9c');
  });
});

describe('getMapPlaceLabel', () => {
  it('keeps only the place name before the context title for map labels', () => {
    expect(getMapPlaceLabel('로마 — 복음의 도착')).toBe('로마');
    expect(getMapPlaceLabel('마라와 엘림 — 쓴 물과 쉼')).toBe('마라와 엘림');
  });
});
