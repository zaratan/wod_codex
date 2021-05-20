import { NextApiRequest, NextApiResponse } from 'next';
import runCors from '../../../helpers/runCors';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCors(req, res);

  res.json({ message: 'Hello Everyone!' });
};
