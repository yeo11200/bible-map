import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const hwp5txtPath = process.env.HWP5TXT_PATH;
const bibleSourcePath = process.env.GAEOKGAEJEONG_SOURCE_PATH;

if (!hwp5txtPath || !bibleSourcePath) {
  throw new Error('HWP5TXT_PATH와 GAEOKGAEJEONG_SOURCE_PATH를 설정해야 합니다.');
}

const books = [
  { key: '출', book: '출애굽기', source: '구약/1-02출애굽기.hwp', output: 'data/korrv-exodus.json', chapters: 40 },
  { key: '롬', book: '로마서', source: '신약/2-06로마서.hwp', output: 'data/korrv-romans.json', chapters: 16 },
];

for (const { key, book, source, output, chapters: chapterCount } of books) {
  const raw = execFileSync(hwp5txtPath, [resolve(bibleSourcePath, source)], {
    encoding: 'utf8',
    env: { ...process.env },
  });
  const chapterVerses = {};
  const pattern = new RegExp(`^${key}(\\d+):(\\d+)\\s+(?:<[^>]+>\\s+)?(.+)$`);

  for (const line of raw.split('\n')) {
    const match = line.trim().match(pattern);
    if (!match) continue;

    const [, chapter, verse, text] = match;
    chapterVerses[chapter] ??= [];
    chapterVerses[chapter].push({ verse: Number(verse), text: text.trim() });
  }

  if (Object.keys(chapterVerses).length !== chapterCount) {
    throw new Error(`${book} ${chapterCount}장을 변환하지 못했습니다. 현재 장 수: ${Object.keys(chapterVerses).length}`);
  }

  writeFileSync(
    resolve(projectRoot, output),
    `${JSON.stringify({ translation: '개역개정', book, chapters: chapterVerses }, null, 2)}\n`,
    'utf8',
  );
  console.log(`${book} ${chapterCount}장을 ${output}에 저장했습니다.`);
}
