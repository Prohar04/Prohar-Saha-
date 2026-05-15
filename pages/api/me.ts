import { NextApiRequest, NextApiResponse } from 'next';
import { PERSONAL_DETAILS } from '../../shared/utils/data';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json(PERSONAL_DETAILS);
};
