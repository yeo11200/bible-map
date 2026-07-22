import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import romans from '../data/korrv-romans.json';
import { RomansReader } from './romans-reader';

describe('RomansReader', () => {
  it('shows the chosen chapter from the complete Romans JSON', () => {
    const { container } = render(<RomansReader chapters={romans.chapters} />);
    const chapterText = container.querySelector('.chapter-text') as HTMLDivElement;
    chapterText.scrollTop = 120;

    fireEvent.click(screen.getByRole('button', { name: '16장' }));

    expect(screen.getByRole('heading', { name: '로마서 16장' })).toBeInTheDocument();
    expect(screen.getByText(/내가 겐그레아 교회의 일꾼으로 있는 우리 자매 뵈뵈를/i)).toBeInTheDocument();
    expect(chapterText.scrollTop).toBe(0);
  });
});
