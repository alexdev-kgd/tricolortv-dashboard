import * as articleController from "../controllers/article.controller.js";
import { Router } from "express";

const router = Router();

router.get("/Article/Get", articleController.get);

router.get("/Article/GetAll", articleController.getAll);

export default router;
