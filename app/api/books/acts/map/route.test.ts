import { describe, expect, it } from 'vitest';
import { GET } from './route';

describe('GET /api/books/acts/map', () => {
  it('returns church, mission, and Rome color layers', async () => {
    const data = await (await GET()).json();
    expect(data.features.map((feature: { properties: { layer: string } }) => feature.properties.layer)).toEqual(expect.arrayContaining(['CHURCH', 'MISSION', 'ROME']));
  });
});
