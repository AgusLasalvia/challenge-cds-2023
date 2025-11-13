import { Router } from "express";

const router = Router();

import UserController from "../controllers/user.controller";


router.post('/register', UserController.createUser);

router.post('/login', UserController.loginUser)


export default router;