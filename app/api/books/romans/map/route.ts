import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  const filePath = join(process.cwd(), 'public/data/romans.geojson');
  const content = await readFile(filePath, 'utf8');

  return Response.json(JSON.parse(content));
}
