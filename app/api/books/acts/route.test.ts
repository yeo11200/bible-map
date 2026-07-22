import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/acts', () => {
  it('returns all Acts chapters and both exploration modes', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Object.keys(data.chapters)).toHaveLength(28);
    expect(data.modes).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'whole-journey' }),
      expect.objectContaining({ id: 'paul-journeys' }),
    ]));
  });
});
