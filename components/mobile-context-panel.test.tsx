import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MobileContextPanel } from './mobile-context-panel';

describe('MobileContextPanel', () => {
  it('collapses with the visible close button and reopens from the place bar', () => {
    render(<MobileContextPanel title="여리고 — 성읍 정복"><p>관련 본문</p></MobileContextPanel>);

    fireEvent.click(screen.getByRole('button', { name: '패널 닫기' }));
    expect(screen.getByRole('complementary')).toHaveAttribute('data-collapsed', 'true');
    expect(screen.getByRole('button', { name: '여리고 — 성읍 정복 패널 열기' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '여리고 — 성읍 정복 패널 열기' }));
    expect(screen.getByRole('complementary')).toHaveAttribute('data-collapsed', 'false');
  });
});
