import { Router } from "express";
import { isUserLoggedIn } from "../middlewares/login.middleware.js";

import MovieController from "../controllers/movie.controller.js";

const router: Router = Router();

router.get("/search", isUserLoggedIn, MovieController.getMovieByKeyword);

export default router;
