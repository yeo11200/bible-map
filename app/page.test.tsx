import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import HomePage from './page';

describe('HomePage', () => {
  afterEach(cleanup);

  it('offers one Romans explorer entry without the duplicated beginner guide', () => {
    render(<HomePage />);

    expect(screen.getByRole('link', { name: '로마서 탐험 시작' })).toHaveAttribute(
      'href',
      '/books/romans',
    );
    expect(screen.getByRole('link', { name: '출애굽 여정 탐험 시작' })).toHaveAttribute(
      'href',
      '/books/exodus',
    );
    expect(screen.queryByRole('heading', { name: '처음 오셨나요?' })).not.toBeInTheDocument();
  });

  it('lists the explorers in biblical book order', () => {
    render(<HomePage />);

    expect(screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent)).toEqual([
      '탐험할 성경',
      '출애굽 여정',
      '여호수아',
      '느헤미야',
      '사도행전',
      '로마서',
      '성경 지도 탐험이란?',
    ]);
  });
});
