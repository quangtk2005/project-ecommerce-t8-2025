import { Request, Response, Router } from "express";
import * as orderController from "../../controllers/admin/order.controller";
const router = Router( { caseSensitive: true });

router.get("", orderController.index);

export default router;