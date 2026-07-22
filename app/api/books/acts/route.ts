import { actsContextItems, actsModes } from '../../../../data/acts-context';
import acts from '../../../../data/gaeokgaejeong-acts.json';

export async function GET() {
  return Response.json({ modes: actsModes, contextItems: actsContextItems, chapters: acts.chapters });
}
