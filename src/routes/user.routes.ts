import { Router } from "express";

const router: Router = Router();

import UserController from "../controllers/user.controller.js";

router.post("/register", UserController.createUser);

router.post("/login", UserController.loginUser);

export default router;
