import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/joshua', () => {
  it('returns the Jordan-to-Shechem journey with all 24 chapters of the Korean Revised Bible', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.contextItems[0]).toEqual(expect.objectContaining({
      id: 'jordan-crossing',
      sequence: 1,
    }));
    expect(data.contextItems).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'jericho-conquest', layer: 'CONQUEST' }),
      expect.objectContaining({ id: 'shechem-covenant', layer: 'INHERITANCE' }),
    ]));
    expect(data.chapters['1']).toEqual(expect.arrayContaining([
      expect.objectContaining({ verse: 1, text: expect.stringContaining('모세가 죽은 후에') }),
    ]));

    const mappedChapters = data.contextItems
      .flatMap((item: { chapterItems: { chapter: number }[] }) => item.chapterItems)
      .map((item: { chapter: number }) => item.chapter)
      .sort((left: number, right: number) => left - right);

    expect(mappedChapters).toEqual(Array.from({ length: 24 }, (_, index) => index + 1));
  });
});
