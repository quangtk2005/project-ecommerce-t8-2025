import { Request, Response, Router } from "express";
import * as settingController from "../../controllers/admin/setting.controller";
const router = Router( { caseSensitive: true });

router.get("/system", settingController.system);

router.get("/company", settingController.company);

export default router;