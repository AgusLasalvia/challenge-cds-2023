import { type Request, type Response, type NextFunction } from 'express';

export function isUserLoggedIn(req: Request, res: Response, next: NextFunction): void {
    const header = req.headers['authorization'];
    if (header && header.includes('Bearer')) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}