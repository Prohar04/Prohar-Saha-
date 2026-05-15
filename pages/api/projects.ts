import { NextApiRequest, NextApiResponse } from 'next';
import { PROJECTS } from '../../shared/utils/data';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json(PROJECTS);
};
