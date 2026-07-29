import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import john from '../data/gaeokgaejeong-john.json';
import luke from '../data/gaeokgaejeong-luke.json';
import mark from '../data/gaeokgaejeong-mark.json';
import matthew from '../data/gaeokgaejeong-matthew.json';
import { gospelModes, gospelsContextItems } from '../data/gospels-context';
import { GospelsExplorer } from './gospels-explorer';

describe('GospelsExplorer', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('switches to John and provides the complete John reader', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ modes: gospelModes, contextItems: gospelsContextItems, books: { matthew, mark, luke, john } }),
    }));

    render(<GospelsExplorer />);
    fireEvent.click(await screen.findByRole('button', { name: '요한' }));

    expect(screen.getByText('요한복음에 기록된 공생애 장소와 사건을 봅니다.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /요단강 — 세례와 사역의 시작.*✓ 선택됨/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '21장' }));
    expect(screen.getByRole('heading', { name: '요한복음 21장' })).toBeInTheDocument();
    expect(screen.getByText(/그들이 조반 먹은 후에 예수께서 시몬 베드로에게 이르시되/i)).toBeInTheDocument();
  });
});
