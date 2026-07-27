import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@vercel/analytics/next', () => ({
  Analytics: () => <div data-testid="vercel-analytics" />,
}));

import RootLayout, { metadata } from './layout';

describe('RootLayout', () => {
  it('includes Vercel Web Analytics on every page', () => {
    const markup = renderToStaticMarkup(<RootLayout><p>페이지 콘텐츠</p></RootLayout>);

    expect(markup).toContain('data-testid="vercel-analytics"');
  });

  it('provides a large image preview for social sharing', () => {
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: '/og-bible-map.png',
        width: 1200,
        height: 630,
      }),
    ]);
    expect(metadata.twitter?.card).toBe('summary_large_image');
  });
});
