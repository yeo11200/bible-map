import type { MetadataRoute } from 'next';

import { getSiteUrl } from '../lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/books/exodus`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/books/joshua`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/books/nehemiah`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/books/acts`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/books/romans`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
