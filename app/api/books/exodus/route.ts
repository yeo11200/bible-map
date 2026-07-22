import { exodusContextItems } from '../../../../data/exodus-context';

export async function GET() {
  return Response.json({ contextItems: exodusContextItems });
}
