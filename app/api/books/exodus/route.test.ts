import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/exodus', () => {
  it('returns the Exodus journey with location certainty labels', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.contextItems).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'sinai-covenant', certainty: 'UNCERTAIN' }),
    ]));
  });
});
