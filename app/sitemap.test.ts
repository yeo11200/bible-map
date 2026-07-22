import { describe, expect, it } from 'vitest';

import sitemap from './sitemap';

describe('sitemap', () => {
  it('lists the home page and both Bible explorers', () => {
    const entries = sitemap();

    expect(entries.map((entry) => entry.url)).toEqual([
      'http://localhost:3001/',
      'http://localhost:3001/books/romans',
      'http://localhost:3001/books/exodus',
    ]);
  });
});
