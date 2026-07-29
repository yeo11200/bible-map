export type GospelId = 'matthew' | 'mark' | 'luke' | 'john';

export type GospelMode = { id: 'whole-journey' | GospelId; label: string; description: string; color?: string };

export type GospelVerseReference = { book: GospelId; chapter: number; verses: number[] };

export type GospelsContextItem = {
  id: string;
  sequence: number;
  title: string;
  layer: 'MATTHEW' | 'MARK' | 'LUKE' | 'JOHN';
  gospels: GospelId[];
  summary: string;
  scriptureReferences: string[];
  verseReferences: GospelVerseReference[];
};

export const gospelModes: GospelMode[] = [
  { id: 'whole-journey', label: '전체 여정', description: '네 복음서에 기록된 예수님의 공생애 장소와 사건을 함께 봅니다.' },
  { id: 'matthew', label: '마태', description: '왕으로 오신 예수님의 사역과 예루살렘으로 향하는 길을 읽습니다.', color: '#984f2a' },
  { id: 'mark', label: '마가', description: '갈릴리에서 시작해 십자가와 부활로 이어지는 빠른 사역의 흐름을 봅니다.', color: '#3e6d83' },
  { id: 'luke', label: '누가', description: '모든 사람을 향한 복음과 예루살렘을 향한 여정을 따라갑니다.', color: '#765e9c' },
  { id: 'john', label: '요한', description: '표적과 절기를 통해 드러나는 예수님의 정체성을 탐색합니다.', color: '#3f7a50' },
];

export const gospelBookNames: Record<GospelId, string> = { matthew: '마태복음', mark: '마가복음', luke: '누가복음', john: '요한복음' };

export const gospelsContextItems: GospelsContextItem[] = [
  { id: 'jordan-baptism', sequence: 1, title: '요단강 — 세례와 사역의 시작', layer: 'MATTHEW', gospels: ['matthew', 'mark', 'luke', 'john'], summary: '예수께서 요한에게 세례를 받으시며 공생애를 시작하십니다.', scriptureReferences: ['마태복음 3:13-17', '마가복음 1:9-11', '누가복음 3:21-22', '요한복음 1:29-34'], verseReferences: [{ book: 'matthew', chapter: 3, verses: [13, 16, 17] }, { book: 'mark', chapter: 1, verses: [9, 10, 11] }, { book: 'luke', chapter: 3, verses: [21, 22] }, { book: 'john', chapter: 1, verses: [29, 32, 34] }] },
  { id: 'cana-sign', sequence: 2, title: '가나 — 첫 표적', layer: 'JOHN', gospels: ['john'], summary: '혼인 잔치에서 물을 포도주로 바꾸시며 영광을 나타내십니다.', scriptureReferences: ['요한복음 2:1-11'], verseReferences: [{ book: 'john', chapter: 2, verses: [1, 7, 9, 11] }] },
  { id: 'nazareth-beginning', sequence: 3, title: '나사렛 — 사명의 선포', layer: 'LUKE', gospels: ['matthew', 'mark', 'luke'], summary: '예수께서 회당에서 이사야의 말씀을 읽으시고 자신의 사명을 선포하십니다.', scriptureReferences: ['마태복음 13:53-58', '마가복음 6:1-6', '누가복음 4:16-30'], verseReferences: [{ book: 'matthew', chapter: 13, verses: [54, 57] }, { book: 'mark', chapter: 6, verses: [2, 3, 5] }, { book: 'luke', chapter: 4, verses: [18, 21, 28, 29] }] },
  { id: 'capernaum-ministry', sequence: 4, title: '가버나움 — 갈릴리 사역의 중심', layer: 'MARK', gospels: ['matthew', 'mark', 'luke', 'john'], summary: '갈릴리 바닷가의 가버나움에서 가르치시고 병든 이를 고치시며 제자들을 부르십니다.', scriptureReferences: ['마태복음 4:13-22', '마가복음 1:21-39', '누가복음 4:31-44', '요한복음 6:24-35'], verseReferences: [{ book: 'matthew', chapter: 4, verses: [13, 19, 23] }, { book: 'mark', chapter: 1, verses: [21, 27, 35, 39] }, { book: 'luke', chapter: 4, verses: [31, 32, 43] }, { book: 'john', chapter: 6, verses: [24, 35] }] },
  { id: 'galilee-ministry', sequence: 5, title: '갈릴리 바다 — 가르침과 표적', layer: 'MATTHEW', gospels: ['matthew', 'mark', 'luke', 'john'], summary: '산상수훈, 풍랑을 잠잠하게 하심, 오병이어처럼 하나님 나라를 드러내는 가르침과 표적이 이어집니다.', scriptureReferences: ['마태복음 5-7장, 14:13-33', '마가복음 4-6장', '누가복음 6:17-49, 9:10-17', '요한복음 6:1-21'], verseReferences: [{ book: 'matthew', chapter: 5, verses: [1, 2, 14] }, { book: 'mark', chapter: 4, verses: [39, 40] }, { book: 'luke', chapter: 9, verses: [13, 16, 17] }, { book: 'john', chapter: 6, verses: [5, 11, 14] }] },
  { id: 'caesarea-confession', sequence: 6, title: '가이사랴 빌립보 — 베드로의 고백', layer: 'MATTHEW', gospels: ['matthew', 'mark', 'luke'], summary: '베드로가 예수를 그리스도라고 고백하고, 예수께서는 고난과 부활을 처음으로 분명히 알리십니다.', scriptureReferences: ['마태복음 16:13-28', '마가복음 8:27-38', '누가복음 9:18-27'], verseReferences: [{ book: 'matthew', chapter: 16, verses: [15, 16, 21] }, { book: 'mark', chapter: 8, verses: [29, 31] }, { book: 'luke', chapter: 9, verses: [20, 22] }] },
  { id: 'jericho-healing', sequence: 7, title: '여리고 — 예루살렘으로 가는 길', layer: 'LUKE', gospels: ['matthew', 'mark', 'luke'], summary: '예수께서 여리고에서 보지 못하는 이를 고치시고, 누가복음은 삭개오의 회심을 전합니다.', scriptureReferences: ['마태복음 20:29-34', '마가복음 10:46-52', '누가복음 18:35-19:10'], verseReferences: [{ book: 'matthew', chapter: 20, verses: [32, 34] }, { book: 'mark', chapter: 10, verses: [51, 52] }, { book: 'luke', chapter: 19, verses: [5, 9, 10] }] },
  { id: 'bethany-anointing', sequence: 8, title: '베다니 — 나사로와 기름 부음', layer: 'JOHN', gospels: ['matthew', 'mark', 'john'], summary: '예수께서는 베다니에서 나사로를 살리시고, 고난을 앞둔 기름 부음을 받으십니다.', scriptureReferences: ['마태복음 26:6-13', '마가복음 14:3-9', '요한복음 11:1-44, 12:1-8'], verseReferences: [{ book: 'matthew', chapter: 26, verses: [6, 12, 13] }, { book: 'mark', chapter: 14, verses: [3, 8, 9] }, { book: 'john', chapter: 11, verses: [25, 43, 44] }, { book: 'john', chapter: 12, verses: [3, 7] }] },
  { id: 'jerusalem-passion', sequence: 9, title: '예루살렘 — 십자가와 부활', layer: 'MATTHEW', gospels: ['matthew', 'mark', 'luke', 'john'], summary: '예루살렘 입성, 최후의 만찬, 십자가, 부활을 통해 공생애 여정이 절정에 이릅니다.', scriptureReferences: ['마태복음 21-28장', '마가복음 11-16장', '누가복음 19:28-24장', '요한복음 12-21장'], verseReferences: [{ book: 'matthew', chapter: 28, verses: [5, 6, 18, 20] }, { book: 'mark', chapter: 16, verses: [6, 15] }, { book: 'luke', chapter: 24, verses: [6, 46, 47] }, { book: 'john', chapter: 20, verses: [19, 21, 31] }] },
  { id: 'galilee-restoration', sequence: 10, title: '갈릴리 — 부활 후 파송', layer: 'JOHN', gospels: ['matthew', 'mark', 'john'], summary: '부활하신 예수께서 갈릴리에서 제자들을 회복시키시고 세상으로 보내십니다.', scriptureReferences: ['마태복음 28:16-20', '마가복음 16:14-20', '요한복음 21장'], verseReferences: [{ book: 'matthew', chapter: 28, verses: [16, 18, 19, 20] }, { book: 'mark', chapter: 16, verses: [15, 19, 20] }, { book: 'john', chapter: 21, verses: [15, 17, 19] }] },
];
