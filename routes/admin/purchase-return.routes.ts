import { Request, Response, Router } from "express";
import * as purchaseReturnController from "../../controllers/admin/purchase-return.controller";
const router = Router( { caseSensitive: true });

router.get("", purchaseReturnController.index);

export default router;