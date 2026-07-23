export type NehemiahMode = { id: 'whole-journey' | 'wall-rebuilding'; label: string; description: string };

export type NehemiahContextItem = {
  id: string;
  sequence: number;
  title: string;
  layer: 'CALLING' | 'REBUILDING' | 'RESTORATION';
  modes: NehemiahMode['id'][];
  summary: string;
  scriptureReferences: string[];
  verseReferences: { chapter: number; verses: number[] }[];
  chapterItems: { chapter: number; title: string; summary: string }[];
};

export const nehemiahModes: NehemiahMode[] = [
  { id: 'whole-journey', label: '수산에서 예루살렘까지', description: '수산 궁의 기도에서 시작해 예루살렘 성벽 재건과 공동체 회복까지 따라갑니다.' },
  { id: 'wall-rebuilding', label: '성벽 재건', description: '예루살렘 성문과 성벽을 따라 재건, 봉헌, 개혁의 흐름을 자세히 봅니다.' },
];

export const nehemiahContextItems: NehemiahContextItem[] = [
  { id: 'susa-calling', sequence: 1, title: '수산 궁 — 슬픔과 기도', layer: 'CALLING', modes: ['whole-journey'], summary: '수산 궁에 있던 느헤미야는 예루살렘 성벽이 무너졌다는 소식을 듣고 금식하며 기도합니다.', scriptureReferences: ['느헤미야 1장'], verseReferences: [{ chapter: 1, verses: [1, 3, 4, 11] }], chapterItems: [{ chapter: 1, title: '예루살렘을 위한 기도', summary: '느헤미야가 예루살렘의 무너진 성벽 소식을 듣고 기도합니다.' }] },
  { id: 'jerusalem-inspection', sequence: 2, title: '예루살렘 — 귀환과 성벽 점검', layer: 'CALLING', modes: ['whole-journey', 'wall-rebuilding'], summary: '왕의 허락을 받은 느헤미야는 예루살렘에 도착해 밤에 무너진 성벽을 살피고 백성을 재건으로 부릅니다.', scriptureReferences: ['느헤미야 2장'], verseReferences: [{ chapter: 2, verses: [5, 8, 11, 13, 17, 18] }], chapterItems: [{ chapter: 2, title: '성벽을 살핌', summary: '느헤미야가 밤에 성벽을 돌아보며 재건을 준비합니다.' }] },
  { id: 'jerusalem-walls', sequence: 3, title: '예루살렘 성벽 — 함께 세움', layer: 'REBUILDING', modes: ['whole-journey', 'wall-rebuilding'], summary: '제사장과 가문, 상인들이 성문과 성벽의 구간을 나누어 함께 재건합니다.', scriptureReferences: ['느헤미야 3장'], verseReferences: [{ chapter: 3, verses: [1, 3, 8, 28, 32] }], chapterItems: [{ chapter: 3, title: '성문과 성벽', summary: '공동체가 구간을 나누어 성문과 성벽을 세웁니다.' }] },
  { id: 'valley-gate-opposition', sequence: 4, title: '골짜기문 — 방해 속 재건', layer: 'REBUILDING', modes: ['whole-journey', 'wall-rebuilding'], summary: '외부의 위협과 내부의 어려움 속에서도 백성은 기도하고 경계하며 성벽 재건을 이어 갑니다.', scriptureReferences: ['느헤미야 4-6장'], verseReferences: [{ chapter: 4, verses: [9, 14, 17, 18] }, { chapter: 6, verses: [3, 15, 16] }], chapterItems: [{ chapter: 4, title: '기도와 경계', summary: '대적의 위협 속에서 한 손으로 일하고 한 손으로 병기를 잡습니다.' }, { chapter: 5, title: '공동체의 정의', summary: '느헤미야가 백성 안의 착취를 바로잡습니다.' }, { chapter: 6, title: '성벽 완공', summary: '성벽이 오십이 일 만에 완공됩니다.' }] },
  { id: 'water-gate-covenant', sequence: 5, title: '수문 — 말씀과 언약', layer: 'RESTORATION', modes: ['whole-journey', 'wall-rebuilding'], summary: '수문 앞 광장에서 율법을 낭독하고, 백성은 회개하며 하나님을 섬기기로 언약합니다.', scriptureReferences: ['느헤미야 7-10장'], verseReferences: [{ chapter: 8, verses: [1, 3, 8, 10] }, { chapter: 9, verses: [1, 2, 38] }, { chapter: 10, verses: [28, 29] }], chapterItems: [{ chapter: 7, title: '예루살렘의 명부', summary: '성문을 지키고 귀환 공동체의 명부를 확인합니다.' }, { chapter: 8, title: '율법 낭독', summary: '에스라가 수문 앞 광장에서 율법을 읽습니다.' }, { chapter: 9, title: '회개와 고백', summary: '백성이 금식하며 죄를 자복합니다.' }, { chapter: 10, title: '언약의 인침', summary: '공동체가 하나님의 율법을 따르기로 언약합니다.' }] },
  { id: 'jerusalem-dedication', sequence: 6, title: '예루살렘 — 성벽 봉헌과 개혁', layer: 'RESTORATION', modes: ['whole-journey', 'wall-rebuilding'], summary: '예루살렘에 사람이 거주하게 하고 성벽을 기쁨으로 봉헌하며, 느헤미야는 예배와 공동체 질서를 다시 세웁니다.', scriptureReferences: ['느헤미야 11-13장'], verseReferences: [{ chapter: 12, verses: [27, 31, 43] }, { chapter: 13, verses: [10, 14, 30, 31] }], chapterItems: [{ chapter: 11, title: '예루살렘 거주', summary: '백성 가운데 일부가 거룩한 성 예루살렘에 거주합니다.' }, { chapter: 12, title: '성벽 봉헌', summary: '두 감사 찬양대를 세워 성벽을 봉헌합니다.' }, { chapter: 13, title: '공동체 개혁', summary: '느헤미야가 성전과 안식일의 질서를 바로잡습니다.' }] },
];
