import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/romans/map', () => {
  it('returns the Romans map GeoJSON from the server', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.type).toBe('FeatureCollection');
  });
});
