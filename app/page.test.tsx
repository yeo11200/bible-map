import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomePage from './page';

describe('HomePage', () => {
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
});
