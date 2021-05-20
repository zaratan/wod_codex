import { NextApiRequest, NextApiResponse } from 'next';
import { loadAdvFlaws } from '../../../helpers/dataLoader';
import runCors from '../../../helpers/runCors';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCors(req, res);

  const advFlaws = loadAdvFlaws();

  const results = advFlaws
    .map((e) => e.subtypes.map((f) => f.data))
    .flat(2)
    .reduce<{
      advantages: Array<{ name: string; path: string; levels: Array<number> }>;
      flaws: Array<{ name: string; path: string; levels: Array<number> }>;
    }>(
      (result, nextAdvFlaw) => {
        const newRes = {
          name: nextAdvFlaw.name,
          path: ``,
          levels:
            typeof nextAdvFlaw.level === 'number'
              ? [nextAdvFlaw.level]
              : nextAdvFlaw.level,
        };
        if (nextAdvFlaw.kind === 'Atout') {
          result.advantages.push(newRes);
        } else {
          result.flaws.push(newRes);
        }
        return result;
      },
      { advantages: [], flaws: [] }
    );

  res.json({ results, test_url: process.env.VERCEL_URL });
};
