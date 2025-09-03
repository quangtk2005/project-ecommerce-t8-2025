import { Request, Response, Router } from "express";
import * as quotationController from "../../controllers/admin/quotation.controller";
const router = Router( { caseSensitive: true });

router.get("", quotationController.index);

export default router;