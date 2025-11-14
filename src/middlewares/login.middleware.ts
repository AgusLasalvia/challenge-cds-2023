import { type Request, type Response, type NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.js';

export async function isUserLoggedIn(req: Request, res: Response, next: NextFunction) {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];

    if (header?.includes('Bearer') && token && await verifyToken(token)) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}