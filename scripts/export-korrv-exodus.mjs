import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const swordPath = process.env.SWORD_PATH ?? '/Users/jinseop.shin/Downloads/KorRV';
const outputPath = resolve(projectRoot, 'data/korrv-exodus.json');

const raw = execFileSync(
  'diatheke',
  ['-b', 'KorRV', '-f', 'plain', '-k', 'Exodus'],
  { encoding: 'utf8', env: { ...process.env, SWORD_PATH: swordPath } },
);

const chapters = {};

for (const line of raw.split('\n')) {
  const match = line.match(/^Exodus (\d+):(\d+):\s*(.+)$/);
  if (!match) continue;

  const [, chapter, verse, text] = match;
  chapters[chapter] ??= [];
  chapters[chapter].push({ verse: Number(verse), text });
}

if (Object.keys(chapters).length !== 40) {
  throw new Error(`출애굽기 40장을 변환하지 못했습니다. 현재 장 수: ${Object.keys(chapters).length}`);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  `${JSON.stringify({ translation: '개역한글 (KorRV)', book: '출애굽기', chapters }, null, 2)}\n`,
  'utf8',
);

console.log(`출애굽기 ${Object.keys(chapters).length}장을 ${outputPath}에 저장했습니다.`);
