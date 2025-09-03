import { Request, Response, Router } from "express";
import * as productController from "../../controllers/admin/product.controller";
const router = Router( { caseSensitive: true });

router.get("/create", productController.create);
router.get("/update", productController.update);
router.get("", productController.index);

export default router;