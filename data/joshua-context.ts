export type JoshuaMode = { id: 'whole-journey' | 'conquest' | 'inheritance'; label: string; description: string };

export type JoshuaContextItem = {
  id: string;
  sequence: number;
  title: string;
  layer: 'CROSSING' | 'CONQUEST' | 'INHERITANCE';
  modes: JoshuaMode['id'][];
  summary: string;
  scriptureReferences: string[];
  verseReferences: { chapter: number; verses: number[] }[];
  chapterItems: { chapter: number; title: string; summary: string }[];
};

export const joshuaModes: JoshuaMode[] = [
  { id: 'whole-journey', label: '전체 여정', description: '요단 동편에서 시작해 가나안 정복과 땅 분배, 세겜 언약까지 살펴봅니다.' },
  { id: 'conquest', label: '가나안 정복', description: '여리고에서 하솔까지, 약속의 땅을 얻어 가는 전쟁의 흐름을 봅니다.' },
  { id: 'inheritance', label: '땅 분배와 언약', description: '지파별 기업의 분배와 세겜에서의 언약 갱신을 읽습니다.' },
];

export const joshuaContextItems: JoshuaContextItem[] = [
  { id: 'jordan-crossing', sequence: 1, title: '요단강 — 약속의 땅으로 들어감', layer: 'CROSSING', modes: ['whole-journey'], summary: '여호수아가 모세를 이어 이스라엘을 이끌고, 언약궤를 따라 요단강을 건너 가나안에 들어갑니다.', scriptureReferences: ['여호수아 1-5장'], verseReferences: [{ chapter: 1, verses: [1, 5, 9] }, { chapter: 3, verses: [14, 15, 16, 17] }, { chapter: 4, verses: [20, 21, 24] }], chapterItems: [{ chapter: 1, title: '여호수아의 부르심', summary: '하나님이 여호수아에게 강하고 담대하라고 말씀하십니다.' }, { chapter: 2, title: '라합과 정탐꾼', summary: '여리고의 라합이 정탐꾼을 숨깁니다.' }, { chapter: 3, title: '요단강을 건넘', summary: '언약궤를 따라 요단강을 건넙니다.' }, { chapter: 4, title: '열두 돌', summary: '요단을 건넌 기념으로 열두 돌을 세웁니다.' }, { chapter: 5, title: '길갈의 유월절', summary: '길갈에서 할례와 유월절을 지킵니다.' }] },
  { id: 'jericho-conquest', sequence: 2, title: '여리고 — 성읍 정복', layer: 'CONQUEST', modes: ['whole-journey', 'conquest'], summary: '이스라엘은 하나님의 명령에 따라 여리고 성을 돌고, 성이 무너지며 가나안 정복이 시작됩니다.', scriptureReferences: ['여호수아 6-8장'], verseReferences: [{ chapter: 6, verses: [2, 3, 20] }, { chapter: 7, verses: [10, 11, 13] }, { chapter: 8, verses: [1, 18, 28] }], chapterItems: [{ chapter: 6, title: '여리고 성읍', summary: '여리고 성이 무너집니다.' }, { chapter: 7, title: '아간의 범죄', summary: '아간의 범죄로 아이 성 전투에서 패합니다.' }, { chapter: 8, title: '아이 성 정복', summary: '아이 성을 정복하고 에발산에서 율법을 낭독합니다.' }] },
  { id: 'gibeon-treaty', sequence: 3, title: '기브온 — 언약과 남부 전쟁', layer: 'CONQUEST', modes: ['whole-journey', 'conquest'], summary: '기브온 주민은 이스라엘과 화친을 맺고, 여호수아는 남부 연합군과 싸워 승리합니다.', scriptureReferences: ['여호수아 9-10장'], verseReferences: [{ chapter: 9, verses: [3, 14, 15] }, { chapter: 10, verses: [8, 12, 13, 14] }], chapterItems: [{ chapter: 9, title: '기브온과 화친', summary: '기브온 주민이 계략으로 이스라엘과 조약을 맺습니다.' }, { chapter: 10, title: '남부 연합군', summary: '여호수아가 남부 왕들의 연합군과 싸웁니다.' }] },
  { id: 'hazor-conquest', sequence: 4, title: '하솔 — 북부 가나안 정복', layer: 'CONQUEST', modes: ['whole-journey', 'conquest'], summary: '여호수아는 북부 왕들의 연합군을 물리치고 하솔을 점령합니다. 이로써 정복 전쟁의 큰 흐름이 마무리됩니다.', scriptureReferences: ['여호수아 11-12장'], verseReferences: [{ chapter: 11, verses: [6, 9, 11, 15] }, { chapter: 12, verses: [7, 24] }], chapterItems: [{ chapter: 11, title: '북부 연합군', summary: '하솔을 중심으로 한 북부 연합군을 물리칩니다.' }, { chapter: 12, title: '정복한 왕들', summary: '모세와 여호수아가 정복한 왕들을 기록합니다.' }] },
  { id: 'gilgal-allotment', sequence: 5, title: '길갈 — 가나안 땅의 분배 시작', layer: 'INHERITANCE', modes: ['whole-journey', 'inheritance'], summary: '정복 후 길갈에서 유다와 갈렙의 기업을 포함해 지파별 땅 분배가 시작됩니다.', scriptureReferences: ['여호수아 13-14장'], verseReferences: [{ chapter: 13, verses: [1, 6, 7] }, { chapter: 14, verses: [6, 10, 12, 13] }], chapterItems: [{ chapter: 13, title: '분배할 땅', summary: '아직 분배할 땅과 요단 동편 기업을 기록합니다.' }, { chapter: 14, title: '갈렙의 기업', summary: '갈렙이 헤브론을 기업으로 받습니다.' }] },
  { id: 'shiloh-allotment', sequence: 6, title: '실로 — 지파별 기업 분배', layer: 'INHERITANCE', modes: ['whole-journey', 'inheritance'], summary: '이스라엘 회중이 실로에 모여 회막을 세우고, 남은 지파의 기업을 제비 뽑아 분배합니다.', scriptureReferences: ['여호수아 15-18장'], verseReferences: [{ chapter: 15, verses: [1, 13] }, { chapter: 17, verses: [14, 17, 18] }, { chapter: 18, verses: [1, 6, 10] }], chapterItems: [{ chapter: 15, title: '유다의 기업', summary: '유다 지파의 경계와 기업을 기록합니다.' }, { chapter: 16, title: '에브라임의 기업', summary: '에브라임 자손의 기업을 기록합니다.' }, { chapter: 17, title: '므낫세의 기업', summary: '므낫세 지파의 기업과 요셉 자손의 요청을 기록합니다.' }, { chapter: 18, title: '실로의 회막', summary: '실로에 회막을 세우고 남은 땅을 분배합니다.' }] },
  { id: 'kedesh-refuge', sequence: 7, title: '게데스 — 도피성', layer: 'INHERITANCE', modes: ['whole-journey', 'inheritance'], summary: '부지중에 사람을 죽인 이가 피할 도피성을 세우고, 레위 사람의 성읍을 지정합니다.', scriptureReferences: ['여호수아 19-21장'], verseReferences: [{ chapter: 19, verses: [49, 50, 51] }, { chapter: 20, verses: [2, 3, 7] }, { chapter: 21, verses: [43, 44, 45] }], chapterItems: [{ chapter: 19, title: '남은 지파의 기업', summary: '여섯 지파의 기업과 여호수아의 기업을 기록합니다.' }, { chapter: 20, title: '도피성', summary: '도피성을 정해 피할 길을 마련합니다.' }, { chapter: 21, title: '레위 성읍', summary: '레위 사람의 성읍과 하나님의 안식을 기록합니다.' }] },
  { id: 'jordan-altar', sequence: 8, title: '요단강 동편 — 증거의 제단', layer: 'INHERITANCE', modes: ['whole-journey', 'inheritance'], summary: '르우벤·갓·므낫세 반 지파가 귀환하며 요단강 가에 증거의 제단을 세워, 온 이스라엘이 여호와를 섬긴다는 뜻을 밝힙니다.', scriptureReferences: ['여호수아 22장'], verseReferences: [{ chapter: 22, verses: [4, 5, 10, 26, 27, 34] }], chapterItems: [{ chapter: 22, title: '증거의 제단', summary: '요단강 동편 지파들이 제단의 뜻을 설명합니다.' }] },
  { id: 'shechem-covenant', sequence: 9, title: '세겜 — 언약 갱신', layer: 'INHERITANCE', modes: ['whole-journey', 'inheritance'], summary: '여호수아는 세겜에서 이스라엘에게 여호와만 섬기라고 권면하고, 백성과 언약을 세웁니다.', scriptureReferences: ['여호수아 23-24장'], verseReferences: [{ chapter: 23, verses: [6, 8, 14] }, { chapter: 24, verses: [14, 15, 24, 25, 31] }], chapterItems: [{ chapter: 23, title: '여호수아의 고별', summary: '여호수아가 여호와께 충성하라고 권면합니다.' }, { chapter: 24, title: '세겜 언약', summary: '이스라엘이 여호와만 섬기기로 언약합니다.' }] },
];
