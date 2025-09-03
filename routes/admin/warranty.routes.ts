import { Request, Response, Router } from "express";
import * as warrantyController from "../../controllers/admin/warranty.controller";
const router = Router( { caseSensitive: true });

router.get("/create", warrantyController.create);
router.get("/update", warrantyController.update);
router.get("", warrantyController.index);

export default router;