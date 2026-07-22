import { exodusContextItems } from '../../../../data/exodus-context';
import exodus from '../../../../data/korrv-exodus.json';

export async function GET() {
  return Response.json({ contextItems: exodusContextItems, chapters: exodus.chapters });
}
