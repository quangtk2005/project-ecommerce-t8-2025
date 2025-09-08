import { Request, Response, Router } from "express";
import * as accountController from "../../controllers/admin/account-admin.controller";
const router = Router( { caseSensitive: true });

router.get("", accountController.index);

export default router;