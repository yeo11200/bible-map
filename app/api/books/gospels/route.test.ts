import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/gospels', () => {
  it('returns all four Gospel readers and Gospel selection modes', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.modes).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'whole-journey' }),
      expect.objectContaining({ id: 'matthew' }),
      expect.objectContaining({ id: 'mark' }),
      expect.objectContaining({ id: 'luke' }),
      expect.objectContaining({ id: 'john' }),
    ]));
    expect(data.contextItems).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'galilee-ministry', gospels: expect.arrayContaining(['matthew', 'mark', 'luke']) }),
      expect.objectContaining({ id: 'cana-sign', gospels: ['john'] }),
    ]));
    expect(Object.keys(data.books)).toEqual(['matthew', 'mark', 'luke', 'john']);
    expect(Object.keys(data.books.matthew.chapters)).toHaveLength(28);
    expect(Object.keys(data.books.mark.chapters)).toHaveLength(16);
    expect(Object.keys(data.books.luke.chapters)).toHaveLength(24);
    expect(Object.keys(data.books.john.chapters)).toHaveLength(21);
  });
});
