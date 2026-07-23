import { joshuaContextItems, joshuaModes } from '../../../../data/joshua-context';
import joshua from '../../../../data/gaeokgaejeong-joshua.json';

export async function GET() {
  return Response.json({ modes: joshuaModes, contextItems: joshuaContextItems, chapters: joshua.chapters });
}
