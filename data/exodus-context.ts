export type ExodusContextItem = {
  id: string;
  title: string;
  layer: 'EVENT' | 'JOURNEY' | 'UNCERTAIN';
  summary: string;
  scriptureReferences: string[];
  certainty: 'TRADITIONAL' | 'UNCERTAIN';
};

export const exodusContextItems: ExodusContextItem[] = [
  {
    id: 'egypt-departure',
    title: '이집트 — 떠남의 시작',
    layer: 'EVENT',
    summary: '이스라엘 백성은 유월절 뒤 이집트를 떠나 광야를 향해 나아갑니다.',
    scriptureReferences: ['출애굽기 12:37-42, 13:17-22'],
    certainty: 'TRADITIONAL',
  },
  {
    id: 'reed-sea-crossing',
    title: '홍해 — 바다를 건넌 사건',
    layer: 'UNCERTAIN',
    summary: '바다를 건넌 사건은 출애굽 여정의 전환점입니다. 정확한 도하 지점에는 여러 견해가 있습니다.',
    scriptureReferences: ['출애굽기 14:1-31'],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'marah-water',
    title: '마라 — 쓴 물이 단 물이 된 곳',
    layer: 'UNCERTAIN',
    summary: '광야에서 마주한 물의 문제와 하나님의 돌보심을 함께 읽는 지점입니다.',
    scriptureReferences: ['출애굽기 15:22-26'],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'elim-rest',
    title: '엘림 — 샘과 종려나무의 쉼',
    layer: 'UNCERTAIN',
    summary: '열두 샘과 종려나무가 언급되는 광야의 쉼터입니다.',
    scriptureReferences: ['출애굽기 15:27'],
    certainty: 'UNCERTAIN',
  },
  {
    id: 'sinai-covenant',
    title: '시내산 — 언약과 율법',
    layer: 'UNCERTAIN',
    summary: '이스라엘이 언약을 맺고 율법을 받는 중심 사건입니다. 시내산의 정확한 위치는 확정되지 않았습니다.',
    scriptureReferences: ['출애굽기 19:1-25, 20:1-21'],
    certainty: 'UNCERTAIN',
  },
];
