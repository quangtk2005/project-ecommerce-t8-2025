import { Request, Response, Router } from "express";
import * as purchaseController from "../../controllers/admin/purchase.controller";
const router = Router( { caseSensitive: true });

router.get("", purchaseController.index);

router.get("/return", purchaseController.returns);

export default router;