import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@vercel/analytics/next', () => ({
  Analytics: () => <div data-testid="vercel-analytics" />,
}));

import RootLayout from './layout';

describe('RootLayout', () => {
  it('includes Vercel Web Analytics on every page', () => {
    const markup = renderToStaticMarkup(<RootLayout><p>페이지 콘텐츠</p></RootLayout>);

    expect(markup).toContain('data-testid="vercel-analytics"');
  });
});
