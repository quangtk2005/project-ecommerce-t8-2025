import { Request, Response, Router } from "express";
import * as stockController from "../../controllers/admin/stock.controller";
const router = Router( { caseSensitive: true });

router.get("/create", stockController.create);
router.get("/update", stockController.update);
router.get("/transfer", stockController.transfer);
router.get("", stockController.index);

export default router;