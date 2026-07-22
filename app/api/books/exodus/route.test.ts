import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/exodus', () => {
  it('returns the Exodus journey from its departure point with location certainty labels', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.contextItems[0]).toEqual(expect.objectContaining({
      id: 'rameses-departure',
      sequence: 1,
    }));
    expect(data.contextItems).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'marah-water', sequence: 6, certainty: 'UNCERTAIN' }),
      expect.objectContaining({ id: 'sinai-covenant', certainty: 'UNCERTAIN' }),
    ]));
    expect(data.chapters['12']).toEqual(expect.arrayContaining([
      expect.objectContaining({ verse: 37, text: expect.stringContaining('라암셋') }),
    ]));
  });
});
