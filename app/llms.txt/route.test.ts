import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /llms.txt', () => {
  it('returns an AI-readable overview and key pages', async () => {
    const response = await GET();
    const content = await response.text();

    expect(response.headers.get('content-type')).toContain('text/plain');
    expect(content).toContain('# 성경 지도 탐험');
    expect(content).toContain('http://localhost:3001/books/romans');
  });
});
