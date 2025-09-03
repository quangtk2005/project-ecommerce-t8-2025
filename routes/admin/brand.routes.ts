import { Request, Response, Router } from "express";
import * as brandController from "../../controllers/admin/brand.controller";
const router = Router( { caseSensitive: true });

router.get("/create", brandController.create);
router.get("/update", brandController.update);
router.get("", brandController.index);

export default router;