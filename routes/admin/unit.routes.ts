import { Request, Response, Router } from "express";
import * as unitController from "../../controllers/admin/unit.controller";
const router = Router( { caseSensitive: true });

router.get("/create", unitController.create);
router.get("/update", unitController.update);
router.get("", unitController.index);

export default router;