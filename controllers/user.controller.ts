import { type Request, type Response } from 'express';
import * as UserCore from '../core/User';

export default class UserController {
    public static userRegister(): void {
        console.log('User registration endpoint');
    }

    public static createUser(req:Request,res:Response):void{
        const { _id, firstName, lastName, password } = req.body;
        
    }
}