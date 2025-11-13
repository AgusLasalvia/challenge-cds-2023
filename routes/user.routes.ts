import { Router } from "express";

const router = Router();

import UserController from "../controllers/user.controller.js";
// import { isUserLoggedIn } from "../middlewares/login.middleware.js";

router.post('/register', UserController.createUser);
