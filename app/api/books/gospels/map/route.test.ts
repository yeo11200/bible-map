import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/gospels/map', () => {
  it('returns the public-ministry places and travel line', async () => {
    const data = await (await GET()).json();

    expect(data.features).toEqual(expect.arrayContaining([
      expect.objectContaining({ properties: expect.objectContaining({ id: 'nazareth-beginning' }) }),
      expect.objectContaining({ properties: expect.objectContaining({ id: 'jerusalem-passion' }) }),
      expect.objectContaining({ geometry: expect.objectContaining({ type: 'LineString' }) }),
    ]));
  });
});
