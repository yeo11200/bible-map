import romans from '../../../../data/korrv-romans.json';
import { romansContextItems } from '../../../../data/romans-context';

export async function GET() {
  return Response.json({
    contextItems: romansContextItems,
    chapters: romans.chapters,
  });
}
