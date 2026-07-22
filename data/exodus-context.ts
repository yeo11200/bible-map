export type ExodusChapterItem = {
  chapter: number;
  title: string;
  summary: string;
};

export type ExodusContextItem = {
  id: string;
  sequence: number;
  title: string;
  layer: 'EVENT' | 'JOURNEY' | 'UNCERTAIN';
  summary: string;
  scriptureReferences: string[];
  verseReferences: { chapter: number; verses: number[] }[];
  chapterItems: ExodusChapterItem[];
  certainty: 'TRADITIONAL' | 'UNCERTAIN';
};

export const exodusContextItems: ExodusContextItem[] = [
  {
    id: 'egypt-oppression', sequence: 1, title: '애굽 — 억압과 모세의 탄생', layer: 'EVENT', certainty: 'UNCERTAIN',
    summary: '출애굽기는 애굽에서 시작합니다. 바로의 억압 속에서 모세가 태어나고 미디안으로 피합니다.',
    scriptureReferences: ['출애굽기 1-2장'], verseReferences: [{ chapter: 1, verses: [8, 13, 14] }, { chapter: 2, verses: [1, 10, 15] }],
    chapterItems: [
      { chapter: 1, title: '애굽의 억압', summary: '바로가 이스라엘 백성을 강제 노역으로 억압합니다.' },
      { chapter: 2, title: '모세의 탄생과 도피', summary: '모세가 태어나고 미디안으로 피합니다.' },
    ],
  },
  {
    id: 'horeb-calling', sequence: 2, title: '호렙산 — 모세의 부르심', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '미디안 땅 호렙산에서 하나님이 모세를 부르시고 애굽으로 보내십니다.',
    scriptureReferences: ['출애굽기 3-4장'], verseReferences: [{ chapter: 3, verses: [4, 7, 10] }, { chapter: 4, verses: [14, 17, 20] }],
    chapterItems: [
      { chapter: 3, title: '불붙는 떨기나무', summary: '하나님이 모세를 부르십니다.' },
      { chapter: 4, title: '모세의 파송', summary: '모세와 아론이 애굽으로 돌아갑니다.' },
    ],
  },
  {
    id: 'egypt-plagues', sequence: 3, title: '애굽 — 바로와 열 재앙', layer: 'EVENT', certainty: 'UNCERTAIN',
    summary: '모세와 아론이 바로 앞에 서고, 이스라엘을 내보내라는 하나님의 명령과 재앙이 이어집니다.',
    scriptureReferences: ['출애굽기 5-11장'], verseReferences: [{ chapter: 5, verses: [1, 2] }, { chapter: 7, verses: [14, 17] }, { chapter: 10, verses: [21, 22] }, { chapter: 11, verses: [4, 5] }],
    chapterItems: [
      { chapter: 5, title: '바로 앞의 모세', summary: '바로가 백성의 짐을 더 무겁게 합니다.' },
      { chapter: 6, title: '구원의 약속', summary: '하나님이 언약을 기억하심을 밝히십니다.' },
      { chapter: 7, title: '첫 재앙', summary: '나일강이 피가 되고 재앙이 시작됩니다.' },
      { chapter: 8, title: '개구리와 파리', summary: '재앙이 애굽을 덮지만 바로의 마음은 굳어집니다.' },
      { chapter: 9, title: '우박 재앙', summary: '우박이 애굽 땅을 칩니다.' },
      { chapter: 10, title: '메뚜기와 흑암', summary: '메뚜기와 흑암 재앙이 이어집니다.' },
      { chapter: 11, title: '마지막 재앙의 예고', summary: '장자의 죽음이 예고됩니다.' },
    ],
  },
  {
    id: 'rameses-departure', sequence: 4, title: '라암셋 — 유월절과 출애굽의 시작', layer: 'EVENT', certainty: 'UNCERTAIN',
    summary: '유월절 뒤 이스라엘 백성은 라암셋을 떠나 첫 여정을 시작합니다. 고대 지명의 정확한 현대 위치는 단정하기 어렵습니다.',
    scriptureReferences: ['출애굽기 12장'], verseReferences: [{ chapter: 12, verses: [12, 13, 37, 38] }],
    chapterItems: [{ chapter: 12, title: '유월절과 출발', summary: '유월절을 지키고 라암셋에서 출발합니다.' }],
  },
  {
    id: 'etham-camp', sequence: 5, title: '에담 — 광야로의 인도', layer: 'JOURNEY', certainty: 'UNCERTAIN',
    summary: '광야 끝 에담에 진을 치고, 구름기둥과 불기둥의 인도를 따라갑니다.',
    scriptureReferences: ['출애굽기 13장'], verseReferences: [{ chapter: 13, verses: [20, 21, 22] }],
    chapterItems: [{ chapter: 13, title: '광야로의 인도', summary: '구름기둥과 불기둥이 길을 인도합니다.' }],
  },
  {
    id: 'reed-sea-crossing', sequence: 6, title: '홍해 — 바다를 건넌 사건', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '바다를 건넌 사건은 출애굽 여정의 전환점입니다. 정확한 도하 지점에는 여러 견해가 있습니다.',
    scriptureReferences: ['출애굽기 14장'], verseReferences: [{ chapter: 14, verses: [13, 14, 21, 22, 29, 30, 31] }],
    chapterItems: [{ chapter: 14, title: '홍해를 건넘', summary: '이스라엘이 바다를 건너고 애굽 군대가 물러납니다.' }],
  },
  {
    id: 'marah-water', sequence: 7, title: '마라와 엘림 — 쓴 물과 쉼', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '홍해를 건넌 뒤 마라의 물과 엘림의 쉼을 경험합니다. 지도 표시는 시나이 반도 내륙의 교육용 추정점입니다.',
    scriptureReferences: ['출애굽기 15장'], verseReferences: [{ chapter: 15, verses: [22, 23, 25, 27] }],
    chapterItems: [{ chapter: 15, title: '노래와 마라', summary: '구원의 노래 뒤 마라와 엘림을 지납니다.' }],
  },
  {
    id: 'sin-wilderness', sequence: 8, title: '신 광야 — 만나와 메추라기', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '신 광야에서 먹을 것을 염려하는 백성에게 만나와 메추라기가 주어집니다.',
    scriptureReferences: ['출애굽기 16장'], verseReferences: [{ chapter: 16, verses: [4, 13, 14, 15] }],
    chapterItems: [{ chapter: 16, title: '만나와 메추라기', summary: '신 광야에서 먹을 것을 공급받습니다.' }],
  },
  {
    id: 'rephidim-water', sequence: 9, title: '르비딤 — 물과 전투', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '물이 없는 곳에서 반석의 물을 경험하고, 아말렉과의 전투를 겪습니다.',
    scriptureReferences: ['출애굽기 17장'], verseReferences: [{ chapter: 17, verses: [5, 6, 10, 11, 12] }],
    chapterItems: [{ chapter: 17, title: '르비딤의 물과 전투', summary: '반석의 물과 아말렉 전투를 경험합니다.' }],
  },
  {
    id: 'midian-advice', sequence: 10, title: '시내 광야 — 이드로의 조언', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '모세의 장인 이드로가 찾아와 백성을 돌보는 재판 체계의 지혜를 나눕니다.',
    scriptureReferences: ['출애굽기 18장'], verseReferences: [{ chapter: 18, verses: [17, 18, 21, 24] }],
    chapterItems: [{ chapter: 18, title: '이드로의 조언', summary: '이드로가 재판 체계의 지혜를 나눕니다.' }],
  },
  {
    id: 'sinai-covenant', sequence: 11, title: '시내산 — 언약과 율법', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '이스라엘이 언약을 맺고 십계명과 공동체의 율례를 받습니다. 시내산의 정확한 위치는 확정되지 않았습니다.',
    scriptureReferences: ['출애굽기 19-24장'], verseReferences: [{ chapter: 19, verses: [3, 4, 5, 6] }, { chapter: 20, verses: [1, 2, 3] }, { chapter: 24, verses: [7, 8] }],
    chapterItems: [
      { chapter: 19, title: '시내산 언약', summary: '백성이 시내산에서 언약을 준비합니다.' },
      { chapter: 20, title: '십계명', summary: '하나님이 십계명을 주십니다.' },
      { chapter: 21, title: '공의의 율례', summary: '종과 폭력에 관한 율례가 주어집니다.' },
      { chapter: 22, title: '공동체의 율례', summary: '재산과 이웃에 관한 율례가 이어집니다.' },
      { chapter: 23, title: '정의와 절기', summary: '정의와 절기에 관한 말씀입니다.' },
      { chapter: 24, title: '언약 체결', summary: '백성이 언약에 응답합니다.' },
    ],
  },
  {
    id: 'sinai-tabernacle', sequence: 12, title: '시내산 — 성막의 설계와 봉헌', layer: 'UNCERTAIN', certainty: 'UNCERTAIN',
    summary: '시내산에서 성막을 설계하고, 금송아지 사건 뒤 언약을 새롭게 하며, 성막을 세워 하나님의 영광을 봅니다.',
    scriptureReferences: ['출애굽기 25-40장'], verseReferences: [{ chapter: 25, verses: [8, 9] }, { chapter: 32, verses: [7, 8] }, { chapter: 34, verses: [10] }, { chapter: 40, verses: [34, 35, 38] }],
    chapterItems: [
      { chapter: 25, title: '언약궤와 상', summary: '성소와 언약궤의 설계가 시작됩니다.' },
      { chapter: 26, title: '성막', summary: '성막의 휘장과 널판을 만듭니다.' },
      { chapter: 27, title: '제단과 뜰', summary: '번제단과 성막 뜰의 규례입니다.' },
      { chapter: 28, title: '제사장 의복', summary: '아론과 아들들의 의복을 정합니다.' },
      { chapter: 29, title: '제사장 위임', summary: '제사장을 거룩하게 구별합니다.' },
      { chapter: 30, title: '분향단과 속전', summary: '분향단과 성소 섬김의 규례입니다.' },
      { chapter: 31, title: '안식일과 돌판', summary: '안식일의 표징과 증거판을 받습니다.' },
      { chapter: 32, title: '금송아지', summary: '백성이 금송아지를 만들어 범죄합니다.' },
      { chapter: 33, title: '중보와 임재', summary: '모세가 하나님의 임재를 구합니다.' },
      { chapter: 34, title: '언약 갱신', summary: '하나님이 언약을 새롭게 하십니다.' },
      { chapter: 35, title: '성막 제작 시작', summary: '백성이 예물을 드리고 제작을 시작합니다.' },
      { chapter: 36, title: '성막과 기구', summary: '성막의 휘장과 널판을 만듭니다.' },
      { chapter: 37, title: '법궤와 상', summary: '법궤와 진설병 상을 만듭니다.' },
      { chapter: 38, title: '제단과 뜰', summary: '제단과 성막 뜰을 완성합니다.' },
      { chapter: 39, title: '제사장 의복', summary: '의복과 성막의 모든 일을 마칩니다.' },
      { chapter: 40, title: '성막 봉헌', summary: '성막을 세우고 여호와의 영광이 충만합니다.' },
    ],
  },
];
