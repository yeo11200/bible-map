import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/nehemiah', () => {
  it('returns the Susa-to-Jerusalem restoration journey with all 13 Korean Revised chapters', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.contextItems[0]).toEqual(expect.objectContaining({
      id: 'susa-calling',
      sequence: 1,
    }));
    expect(data.contextItems).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'jerusalem-walls', layer: 'REBUILDING' }),
      expect.objectContaining({ id: 'jerusalem-dedication', layer: 'RESTORATION' }),
    ]));
    expect(data.chapters['1']).toEqual(expect.arrayContaining([
      expect.objectContaining({ verse: 1, text: expect.stringContaining('하가랴의 아들 느헤미야') }),
    ]));

    const mappedChapters = data.contextItems
      .flatMap((item: { chapterItems: { chapter: number }[] }) => item.chapterItems)
      .map((item: { chapter: number }) => item.chapter)
      .sort((left: number, right: number) => left - right);

    expect(mappedChapters).toEqual(Array.from({ length: 13 }, (_, index) => index + 1));
  });
});
