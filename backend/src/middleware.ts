import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

interface UserPayload {
  id: number;
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err || !user) {
        return res.status(403).send({ error: 'Invalid token' });
      }

      req.user = user as UserPayload;

      next();
    });
  } else {
    return res.status(401).send({ error: 'Unauthorized' });
  }
};
