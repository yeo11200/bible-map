import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BookCard } from './book-card';

describe('BookCard', () => {
  it('links to the Romans explorer', () => {
    render(
      <BookCard
        title="로마서"
        description="편지의 배경과 여정을 지도에서 탐험합니다."
        href="/books/romans"
      />,
    );

    expect(screen.getByRole('link', { name: /로마서 탐험 시작/i })).toHaveAttribute(
      'href',
      '/books/romans',
    );
  });
});
