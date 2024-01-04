import * as articleController from "../controllers/article.controller.js";
import { Router } from "express";

const router = Router();

router.get("/article", articleController.get);

export default router;
