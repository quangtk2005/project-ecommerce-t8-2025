import { Request, Response, Router } from "express";
import * as barcodeController from "../../controllers/admin/barcode.controller";
const router = Router( { caseSensitive: true });

router.get("/create", barcodeController.create);
router.get("/update", barcodeController.update);
router.get("", barcodeController.index);

export default router;