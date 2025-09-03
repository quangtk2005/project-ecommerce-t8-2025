import { Request, Response, Router } from "express";
import * as couponController from "../../controllers/admin/coupons.controller";
const router = Router( { caseSensitive: true });

router.get("", couponController.index);

export default router;