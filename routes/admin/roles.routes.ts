import { Request, Response, Router } from "express";
import * as rolesController from "../../controllers/admin/roles.controller";
const router = Router( { caseSensitive: true });

router.get("/permission", rolesController.permission);

router.get("", rolesController.index);

export default router;