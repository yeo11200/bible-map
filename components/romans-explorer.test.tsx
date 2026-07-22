import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import romans from '../data/korrv-romans.json';
import { romansContextItems } from '../data/romans-context';
import { RomansExplorer } from './romans-explorer';

describe('RomansExplorer', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('shows the selected place and its scripture reference', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ contextItems: romansContextItems, chapters: romans.chapters }),
    }));

    const { container } = render(<RomansExplorer />);
    const romeButton = await screen.findByRole('button', { name: /로마 — 로마서의 수신지/i });
    const panel = container.querySelector('.context-panel') as HTMLElement;

    fireEvent.click(romeButton);

    expect(screen.getAllByText('로마서 1:7, 15')).toHaveLength(2);
    expect(
      screen.getAllByText(/로마에서 하나님의 사랑하심을 받고 성도로 부르심을 받은 모든 자에게/i),
    ).toHaveLength(2);

    panel.scrollTop = 240;
    fireEvent.click(screen.getByRole('button', { name: /예루살렘 — 성도를 섬기는 여정/i }));

    expect(panel.scrollTop).toBe(0);
  });
});
