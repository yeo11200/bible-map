export type ExodusContextItem = {
  id: string;
  sequence: number;
  title: string;
  layer: 'EVENT' | 'JOURNEY' | 'UNCERTAIN';
  summary: string;
  scriptureReferences: string[];
  verseReferences: { chapter: number; verses: number[] }[];
  certainty: 'TRADITIONAL' | 'UNCERTAIN';
};

export const exodusContextItems: ExodusContextItem[] = [
  {
    id: 'rameses-departure',
    sequence: 1,
    title: '라암셋 — 출애굽의 시작',
    layer: 'EVENT',
    summary: '이스라엘 백성은 유월절 뒤 라암셋을 떠나 첫 여정을 시작합니다. 고대 지명의 정확한 현대 위치는 단정하기 어렵습니다.',
    scriptureReferences: ['출애굽기 12:37-42'],
    verseReferences: [{ chapter: 12, verses: [37, 38] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'succoth-camp',
    sequence: 2,
    title: '숙곳 — 첫 번째 머문 곳',
    layer: 'JOURNEY',
    summary: '라암셋을 떠난 백성이 처음으로 숙곳에 이릅니다.',
    scriptureReferences: ['출애굽기 12:37'],
    verseReferences: [{ chapter: 12, verses: [37] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'etham-camp',
    sequence: 3,
    title: '에담 — 광야 끝의 진',
    layer: 'JOURNEY',
    summary: '광야 끝 에담에 진을 치고, 구름기둥과 불기둥의 인도를 따라갑니다.',
    scriptureReferences: ['출애굽기 13:20-22'],
    verseReferences: [{ chapter: 13, verses: [20, 21, 22] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'sea-encampment',
    sequence: 4,
    title: '바다 앞 진 — 도하 전의 밤',
    layer: 'UNCERTAIN',
    summary: '바알스본 맞은편 바다 앞에 진을 친 뒤, 바다를 건너는 사건이 이어집니다. 본문의 지명 비정에는 여러 견해가 있습니다.',
    scriptureReferences: ['출애굽기 14:1-4'],
    verseReferences: [{ chapter: 14, verses: [1, 2, 3, 4] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'reed-sea-crossing',
    sequence: 5,
    title: '홍해 — 바다를 건넌 사건',
    layer: 'UNCERTAIN',
    summary: '바다를 건넌 사건은 출애굽 여정의 전환점입니다. 정확한 도하 지점에는 여러 견해가 있습니다.',
    scriptureReferences: ['출애굽기 14:1-31'],
    verseReferences: [{ chapter: 14, verses: [13, 14, 21, 22, 29, 30, 31] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'marah-water',
    sequence: 6,
    title: '마라 — 쓴 물이 단 물이 된 곳',
    layer: 'UNCERTAIN',
    summary: '홍해를 건넌 뒤 광야에서 마주한 물의 문제와 하나님의 돌보심을 함께 읽는 지점입니다. 지도 표시는 바다가 아닌 시나이 반도 내륙의 교육용 추정점입니다.',
    scriptureReferences: ['출애굽기 15:22-26'],
    verseReferences: [{ chapter: 15, verses: [22, 23, 24, 25, 26] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'elim-rest',
    sequence: 7,
    title: '엘림 — 샘과 종려나무의 쉼',
    layer: 'UNCERTAIN',
    summary: '열두 샘과 종려나무가 언급되는 광야의 쉼터입니다.',
    scriptureReferences: ['출애굽기 15:27'],
    verseReferences: [{ chapter: 15, verses: [27] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'sin-wilderness',
    sequence: 8,
    title: '신 광야 — 만나를 주신 곳',
    layer: 'UNCERTAIN',
    summary: '엘림을 떠난 뒤 먹을 것을 염려하는 백성에게 만나와 메추라기가 주어집니다.',
    scriptureReferences: ['출애굽기 16:1-36'],
    verseReferences: [{ chapter: 16, verses: [4, 13, 14, 15] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'rephidim-water',
    sequence: 9,
    title: '르비딤 — 반석에서 난 물',
    layer: 'UNCERTAIN',
    summary: '물이 없는 곳에서 반석의 물을 경험하고, 아말렉과의 전투를 겪습니다.',
    scriptureReferences: ['출애굽기 17:1-16'],
    verseReferences: [{ chapter: 17, verses: [5, 6, 10, 11, 12] }],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'sinai-covenant',
    sequence: 10,
    title: '시내산 — 언약과 율법',
    layer: 'UNCERTAIN',
    summary: '이스라엘이 언약을 맺고 율법을 받는 중심 사건입니다. 시내산의 정확한 위치는 확정되지 않았습니다.',
    scriptureReferences: ['출애굽기 19:1-25, 20:1-21'],
    verseReferences: [
      { chapter: 19, verses: [3, 4, 5, 6] },
      { chapter: 20, verses: [1, 2, 3] },
    ],
    certainty: 'UNCERTAIN',
  },
];
