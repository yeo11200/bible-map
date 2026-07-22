import { describe, expect, it } from 'vitest';

import { getContextItem, getInitialContextItem } from './context';

describe('Romans context', () => {
  it('starts with Rome as the letter recipient', () => {
    expect(getInitialContextItem()).toMatchObject({
      id: 'rome-recipient',
      title: '로마 — 로마서의 수신지',
      scriptureReferences: ['로마서 1:7, 15'],
    });
  });

  it('finds a context item by its map feature id', () => {
    expect(getContextItem('corinth-writing-context')).toMatchObject({
      title: '고린도 — 기록 배경',
      layer: 'WRITING_CONTEXT',
    });
  });

  it('includes geographic context for Jerusalem', () => {
    expect(getContextItem('jerusalem-service')).toMatchObject({
      scriptureReferences: ['로마서 15:19, 25-26, 31'],
      layer: 'RELATED_HISTORICAL_EVENT',
    });
  });
});
