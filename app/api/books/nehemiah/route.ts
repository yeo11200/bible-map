import { nehemiahContextItems, nehemiahModes } from '../../../../data/nehemiah-context';
import nehemiah from '../../../../data/gaeokgaejeong-nehemiah.json';

export async function GET() {
  return Response.json({ modes: nehemiahModes, contextItems: nehemiahContextItems, chapters: nehemiah.chapters });
}
