import slugify from 'slugify';
import { AdvFlawType } from '../types/AdvFlawTypes';

export const advFlawSlug = (advFlaw: AdvFlawType) =>
  `${advFlaw.kind === 'Atout' ? 'adv' : 'flaw'}-${slugify(
    advFlaw.type
  ).toLowerCase()}-${slugify(advFlaw.name).toLowerCase()}-${
    advFlaw.source.length
  }`;
