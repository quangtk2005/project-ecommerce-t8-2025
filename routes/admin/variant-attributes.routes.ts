import { Request, Response, Router } from "express";
import * as variantAttributesController from "../../controllers/admin/variant-attributes.controller";
const router = Router( { caseSensitive: true });

router.get("/create", variantAttributesController.create);
router.get("/update", variantAttributesController.update);
router.get("", variantAttributesController.index);

export default router;