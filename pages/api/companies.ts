import { NextApiRequest, NextApiResponse } from 'next';
import { COMPANIES } from '../../shared/utils/data';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json(COMPANIES);
};
