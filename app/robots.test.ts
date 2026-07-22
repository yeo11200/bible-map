import { describe, expect, it } from 'vitest';

import robots from './robots';

describe('robots', () => {
  it('allows crawling and declares the sitemap', () => {
    const rules = robots();

    expect(rules.rules).toEqual({ userAgent: '*', allow: '/' });
    expect(rules.sitemap).toBe('http://localhost:3001/sitemap.xml');
  });
});
