import { describe, expect, it } from 'vitest';

import sitemap from './sitemap';

describe('sitemap', () => {
  it('lists the home page and all Bible explorers', () => {
    const entries = sitemap();

    expect(entries.map((entry) => entry.url)).toEqual([
      'http://localhost:3001/',
      'http://localhost:3001/books/exodus',
      'http://localhost:3001/books/joshua',
      'http://localhost:3001/books/acts',
      'http://localhost:3001/books/romans',
    ]);
  });
});
