import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import joshua from '../data/gaeokgaejeong-joshua.json';
import { joshuaContextItems, joshuaModes } from '../data/joshua-context';
import { JoshuaExplorer } from './joshua-explorer';

describe('JoshuaExplorer', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('switches to conquest mode, emphasizes the first place, and opens its full chapter', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ modes: joshuaModes, contextItems: joshuaContextItems, chapters: joshua.chapters }),
    }));

    render(<JoshuaExplorer />);
    fireEvent.click(await screen.findByRole('button', { name: '가나안 정복' }));

    expect(screen.getByRole('button', { name: /여리고 — 성읍 정복.*✓ 선택됨/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /6장 · 여리고 성읍/ }));
    expect(screen.getByRole('heading', { name: '여호수아 6장' })).toBeInTheDocument();
    expect(screen.getByText(/여리고는 굳게 닫혔고/i)).toBeInTheDocument();
  });
});
