import { describe, expect, it } from 'vitest';

import { GET } from './route';

describe('GET /api/books/exodus/map', () => {
  it('returns Egypt and Sinai event zones with matching context IDs', async () => {
    const response = await GET();
    const data = await response.json();
    const featureIds = data.features.map((feature: { properties: { id: string } }) => feature.properties.id);

    expect(response.status).toBe(200);
    expect(featureIds).toEqual(expect.arrayContaining([
      'egypt-oppression',
      'horeb-calling',
      'egypt-plagues',
      'rameses-departure',
      'sinai-tabernacle',
    ]));
  });
});
