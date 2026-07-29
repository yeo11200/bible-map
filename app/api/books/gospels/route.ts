import { gospelBookNames, gospelModes, gospelsContextItems } from '../../../../data/gospels-context';
import john from '../../../../data/gaeokgaejeong-john.json';
import luke from '../../../../data/gaeokgaejeong-luke.json';
import mark from '../../../../data/gaeokgaejeong-mark.json';
import matthew from '../../../../data/gaeokgaejeong-matthew.json';

export async function GET() {
  return Response.json({
    modes: gospelModes,
    contextItems: gospelsContextItems,
    books: {
      matthew: { ...matthew, book: gospelBookNames.matthew },
      mark: { ...mark, book: gospelBookNames.mark },
      luke: { ...luke, book: gospelBookNames.luke },
      john: { ...john, book: gospelBookNames.john },
    },
  });
}
