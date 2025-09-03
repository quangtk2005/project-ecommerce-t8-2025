import { Request, Response, Router } from "express";
import * as posController from "../../controllers/admin/pos.controller";
const router = Router( { caseSensitive: true });

router.get("", posController.index);

export default router;