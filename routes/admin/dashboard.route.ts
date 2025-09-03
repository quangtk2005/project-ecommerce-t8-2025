import { Request, Response, Router } from "express";
import * as dashboardController from "../../controllers/admin/dashboard.controller";
const router = Router( { caseSensitive: true });

router.get("", dashboardController.dashboard);

export default router;