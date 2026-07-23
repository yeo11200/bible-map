import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import nehemiah from '../data/gaeokgaejeong-nehemiah.json';
import { nehemiahContextItems, nehemiahModes } from '../data/nehemiah-context';
import { NehemiahExplorer } from './nehemiah-explorer';

describe('NehemiahExplorer', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('opens wall rebuilding mode and reads the wall construction chapter', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ modes: nehemiahModes, contextItems: nehemiahContextItems, chapters: nehemiah.chapters }),
    }));

    render(<NehemiahExplorer />);
    fireEvent.click(await screen.findByRole('button', { name: '성벽 재건' }));
    fireEvent.click(screen.getByRole('button', { name: /예루살렘 성벽 — 함께 세움/ }));
    fireEvent.click(screen.getByRole('button', { name: /3장 · 성문과 성벽/ }));

    expect(screen.getByRole('heading', { name: '느헤미야 3장' })).toBeInTheDocument();
    expect(screen.getAllByText(/대제사장 엘리아십이/i)).toHaveLength(2);
  });
});
