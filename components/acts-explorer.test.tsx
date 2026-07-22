import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import acts from '../data/gaeokgaejeong-acts.json';
import { actsContextItems, actsModes } from '../data/acts-context';
import { ActsExplorer } from './acts-explorer';

describe('ActsExplorer', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('switches to Paul journeys and makes the selected item explicit', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ modes: actsModes, contextItems: actsContextItems, chapters: acts.chapters }) }));

    render(<ActsExplorer />);
    fireEvent.click(await screen.findByRole('button', { name: '바울의 선교 여행' }));

    expect(screen.getByRole('button', { name: /안디옥 — 1차 선교 여행.*✓ 선택됨/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /13장 · 1차 선교 시작/ }));
    expect(screen.getByRole('heading', { name: '사도행전 13장' })).toBeInTheDocument();
    expect(screen.getByText(/안디옥 교회에 선지자들과 교사들이 있으니/i)).toBeInTheDocument();
  });
});
