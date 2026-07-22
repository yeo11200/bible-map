export type ContextLayer =
  | 'RECIPIENT'
  | 'WRITING_CONTEXT'
  | 'RELATED_HISTORICAL_EVENT';

export type ContextItem = {
  id: string;
  title: string;
  layer: ContextLayer;
  summary: string;
  scriptureReferences: string[];
  verseReferences: Array<{ chapter: number; verses: number[] }>;
};

export const romansContextItems: ContextItem[] = [
  {
    id: 'rome-recipient',
    title: '로마 — 로마서의 수신지',
    layer: 'RECIPIENT',
    summary: '바울은 로마에 있는 성도들에게 복음의 핵심을 편지로 전했습니다.',
    scriptureReferences: ['로마서 1:7, 15'],
    verseReferences: [{ chapter: 1, verses: [7, 15] }],
  },
  {
    id: 'corinth-writing-context',
    title: '고린도 — 기록 배경',
    layer: 'WRITING_CONTEXT',
    summary: '로마서가 기록된 배경으로 널리 알려진 도시입니다.',
    scriptureReferences: ['로마서 16:1-2, 23'],
    verseReferences: [{ chapter: 16, verses: [1, 2, 23] }],
  },
  {
    id: 'rome-journey',
    title: '로마행 — 연결된 역사적 사건',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '바울의 로마 방문과 로마행은 사도행전의 사건으로 함께 읽을 수 있습니다.',
    scriptureReferences: ['사도행전 27-28'],
    verseReferences: [],
  },
  {
    id: 'jerusalem-service',
    title: '예루살렘 — 성도를 섬기는 여정',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '바울은 예루살렘 성도를 섬기는 일을 앞두고 자신의 복음 전파 여정을 설명합니다.',
    scriptureReferences: ['로마서 15:19, 25-26, 31'],
    verseReferences: [{ chapter: 15, verses: [19, 25, 26, 31] }],
  },
  {
    id: 'illyricum-mission',
    title: '일루리곤 — 복음 전파의 서쪽 경계',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '바울은 예루살렘에서 일루리곤까지 복음을 전했다고 기록합니다.',
    scriptureReferences: ['로마서 15:19'],
    verseReferences: [{ chapter: 15, verses: [19] }],
  },
  {
    id: 'macedonia-offering',
    title: '마게도냐 — 예루살렘을 위한 연보',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '마게도냐 성도들의 연보가 예루살렘 성도를 돕는 여정으로 이어집니다.',
    scriptureReferences: ['로마서 15:26'],
    verseReferences: [{ chapter: 15, verses: [26] }],
  },
  {
    id: 'achaia-offering',
    title: '아가야 — 예루살렘을 위한 연보',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '아가야 성도들의 연보도 예루살렘 성도를 돕는 일에 연결됩니다.',
    scriptureReferences: ['로마서 15:26'],
    verseReferences: [{ chapter: 15, verses: [26] }],
  },
  {
    id: 'spain-plan',
    title: '서바나 — 바울이 계획한 다음 여정',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '바울은 로마를 거쳐 서바나로 가려는 계획을 밝힙니다.',
    scriptureReferences: ['로마서 15:23, 28'],
    verseReferences: [{ chapter: 15, verses: [23, 28] }],
  },
  {
    id: 'judea-prayer',
    title: '유대 — 기도를 요청한 지역',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '바울은 유대에서의 안전과 예루살렘 섬김을 위해 기도를 요청합니다.',
    scriptureReferences: ['로마서 15:31'],
    verseReferences: [{ chapter: 15, verses: [31] }],
  },
  {
    id: 'asia-ebpaenetus',
    title: '아시아 — 에배네도의 첫 열매',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '에배네도는 아시아에서 그리스도께 처음 익은 열매로 소개됩니다.',
    scriptureReferences: ['로마서 16:5'],
    verseReferences: [{ chapter: 16, verses: [5] }],
  },
  {
    id: 'zion-promise',
    title: '시온 — 구원의 약속',
    layer: 'RELATED_HISTORICAL_EVENT',
    summary: '로마서는 시온에서 오는 구원자에 대한 약속을 인용합니다.',
    scriptureReferences: ['로마서 9:33, 11:26'],
    verseReferences: [{ chapter: 9, verses: [33] }, { chapter: 11, verses: [26] }],
  },
];
