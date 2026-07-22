import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import exodus from '../data/korrv-exodus.json';
import { exodusContextItems } from '../data/exodus-context';
import { ExodusContextPanel } from './exodus-context-panel';

describe('ExodusContextPanel', () => {
  it('opens the selected chapter from a map zone', () => {
    const egyptPlagues = exodusContextItems.find((item) => item.id === 'egypt-plagues');
    if (!egyptPlagues) throw new Error('애굽 재앙 지도 구간이 없습니다.');

    render(<ExodusContextPanel item={egyptPlagues} chapters={exodus.chapters} />);

    fireEvent.click(screen.getByRole('button', { name: '10장 · 메뚜기와 흑암' }));

    expect(screen.getByRole('heading', { name: '출애굽기 10장' })).toBeInTheDocument();
    expect(screen.getByText(/메뚜기가 애굽 온 땅에 이르러/i)).toBeInTheDocument();
  });
});
