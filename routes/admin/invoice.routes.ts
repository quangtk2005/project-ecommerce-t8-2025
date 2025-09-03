import { Request, Response, Router } from "express";
import * as invoiceController from "../../controllers/admin/invoice.controller";
const router = Router( { caseSensitive: true });

router.get("", invoiceController.index);

router.get("/id", invoiceController.detail);

export default router;