import * as adminController from "../controllers/admin.controller.js";
import { Router } from "express";

const router = Router();

router.post("/adminSignin", adminController.adminSignin);
router.get("/admin/:login", adminController.getAdminProfileByLogin);
router.post("/admin/logout", adminController.logout);

export default router;
