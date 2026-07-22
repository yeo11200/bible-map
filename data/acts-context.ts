export type ActsMode = { id: 'whole-journey' | 'paul-journeys'; label: string; description: string };
export type ActsContextItem = {
  id: string;
  title: string;
  layer: 'CHURCH' | 'MISSION' | 'ROME';
  modes: ActsMode['id'][];
  summary: string;
  scriptureReferences: string[];
  verseReferences: { chapter: number; verses: number[] }[];
  chapterItems: { chapter: number; title: string; summary: string }[];
};

export const actsModes: ActsMode[] = [
  { id: 'whole-journey', label: '전체 여정', description: '예루살렘에서 로마까지, 교회의 확장과 복음의 흐름을 봅니다.' },
  { id: 'paul-journeys', label: '바울의 선교 여행', description: '1·2·3차 선교 여행과 로마행을 따라갑니다.' },
];

export const actsContextItems: ActsContextItem[] = [
  { id: 'jerusalem-church', title: '예루살렘 — 교회의 시작', layer: 'CHURCH', modes: ['whole-journey'], summary: '성령 강림으로 교회가 시작되고 복음이 예루살렘에서 선포됩니다.', scriptureReferences: ['사도행전 1-7장'], verseReferences: [{ chapter: 1, verses: [8] }, { chapter: 2, verses: [1, 4] }], chapterItems: [{ chapter: 1, title: '승천과 증인의 약속', summary: '예수께서 땅 끝까지 이르는 증인을 약속하십니다.' }, { chapter: 2, title: '오순절과 교회', summary: '성령이 임하고 교회가 시작됩니다.' }, { chapter: 3, title: '성전의 치유', summary: '베드로가 성전에서 복음을 전합니다.' }, { chapter: 4, title: '담대한 증언', summary: '사도들이 복음을 담대히 증언합니다.' }, { chapter: 5, title: '교회의 성장', summary: '교회가 성장하며 핍박을 겪습니다.' }, { chapter: 6, title: '일곱 사람', summary: '공동체 섬김을 위한 일곱 사람이 세워집니다.' }, { chapter: 7, title: '스데반의 증언', summary: '스데반이 복음을 증언합니다.' }] },
  { id: 'judea-samaria', title: '유대와 사마리아 — 복음의 확장', layer: 'CHURCH', modes: ['whole-journey'], summary: '핍박 속에서도 복음은 유대와 사마리아로 퍼져 갑니다.', scriptureReferences: ['사도행전 8-12장'], verseReferences: [{ chapter: 8, verses: [4, 5] }, { chapter: 9, verses: [3, 4, 15] }], chapterItems: [{ chapter: 8, title: '사마리아 복음', summary: '빌립이 사마리아에서 복음을 전합니다.' }, { chapter: 9, title: '바울의 회심', summary: '사울이 다메섹 길에서 부르심을 받습니다.' }, { chapter: 10, title: '고넬료의 집', summary: '복음이 이방인에게도 전해집니다.' }, { chapter: 11, title: '안디옥 교회', summary: '안디옥에서 제자들이 그리스도인이라 불립니다.' }, { chapter: 12, title: '교회의 기도', summary: '교회가 핍박 속에서 기도합니다.' }] },
  { id: 'first-mission', title: '안디옥 — 1차 선교 여행', layer: 'MISSION', modes: ['whole-journey', 'paul-journeys'], summary: '안디옥 교회가 바울과 바나바를 파송하며 선교 여행이 시작됩니다.', scriptureReferences: ['사도행전 13-14장'], verseReferences: [{ chapter: 13, verses: [2, 3] }, { chapter: 14, verses: [26, 27] }], chapterItems: [{ chapter: 13, title: '1차 선교 시작', summary: '바울과 바나바가 안디옥에서 파송됩니다.' }, { chapter: 14, title: '교회에 보고', summary: '선교 여정을 마치고 교회에 보고합니다.' }] },
  { id: 'second-mission', title: '마게도냐와 아가야 — 2차 선교 여행', layer: 'MISSION', modes: ['whole-journey', 'paul-journeys'], summary: '바울은 환상을 따라 마게도냐로 건너가 빌립보·데살로니가·고린도에 복음을 전합니다.', scriptureReferences: ['사도행전 15-18장'], verseReferences: [{ chapter: 16, verses: [9, 10] }, { chapter: 17, verses: [22, 23] }], chapterItems: [{ chapter: 15, title: '예루살렘 회의', summary: '이방인 교회와 복음의 자유를 확인합니다.' }, { chapter: 16, title: '마게도냐로', summary: '바울이 마게도냐 환상을 따라갑니다.' }, { chapter: 17, title: '데살로니가와 아덴', summary: '바울이 여러 도시에서 복음을 전합니다.' }, { chapter: 18, title: '고린도 사역', summary: '바울이 고린도에서 사역합니다.' }] },
  { id: 'third-mission', title: '에베소 — 3차 선교 여행', layer: 'MISSION', modes: ['whole-journey', 'paul-journeys'], summary: '에베소를 중심으로 말씀 사역이 확장되고, 바울은 예루살렘으로 향합니다.', scriptureReferences: ['사도행전 19-21장'], verseReferences: [{ chapter: 19, verses: [8, 10] }, { chapter: 20, verses: [24] }], chapterItems: [{ chapter: 19, title: '에베소 사역', summary: '말씀이 힘 있게 퍼져 갑니다.' }, { chapter: 20, title: '밀레도 작별', summary: '바울이 에베소 장로들과 작별합니다.' }, { chapter: 21, title: '예루살렘으로', summary: '바울이 예루살렘으로 올라갑니다.' }] },
  { id: 'caesarea-trial', title: '가이사랴 — 재판과 증언', layer: 'ROME', modes: ['whole-journey', 'paul-journeys'], summary: '바울은 가이사랴에서 총독과 왕 앞에 복음을 증언합니다.', scriptureReferences: ['사도행전 22-26장'], verseReferences: [{ chapter: 23, verses: [11] }, { chapter: 26, verses: [28, 29] }], chapterItems: [{ chapter: 22, title: '군중 앞의 증언', summary: '바울이 자신의 부르심을 증언합니다.' }, { chapter: 23, title: '로마를 향한 약속', summary: '주께서 로마에서도 증언할 것을 말씀하십니다.' }, { chapter: 24, title: '벨릭스 앞의 변론', summary: '바울이 벨릭스 앞에서 변론합니다.' }, { chapter: 25, title: '가이사에게 상소', summary: '바울이 로마 황제에게 상소합니다.' }, { chapter: 26, title: '아그립바 앞의 증언', summary: '바울이 아그립바 왕 앞에서 증언합니다.' }] },
  { id: 'rome-arrival', title: '로마 — 복음의 도착', layer: 'ROME', modes: ['whole-journey', 'paul-journeys'], summary: '폭풍과 난파를 지나 바울은 로마에 도착해 담대히 하나님 나라를 전합니다.', scriptureReferences: ['사도행전 27-28장'], verseReferences: [{ chapter: 27, verses: [23, 24] }, { chapter: 28, verses: [30, 31] }], chapterItems: [{ chapter: 27, title: '로마행과 난파', summary: '바울이 폭풍 속에서도 하나님의 약속을 전합니다.' }, { chapter: 28, title: '로마에서의 복음', summary: '바울이 로마에서 하나님 나라를 전합니다.' }] },
];
