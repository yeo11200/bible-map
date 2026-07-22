import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  const content = await readFile(join(process.cwd(), 'public/data/exodus.geojson'), 'utf8');

  return Response.json(JSON.parse(content));
}
