import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/romans', () => {
  it('returns Romans context and scripture data from the server', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.contextItems[0]).toMatchObject({ id: 'rome-recipient' });
    expect(data.chapters['1'][0]).toMatchObject({ verse: 1 });
  });
});
