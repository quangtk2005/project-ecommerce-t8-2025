import { Request, Response, Router } from "express";
import * as productCategoryController from "../../controllers/admin/product-category.controller";
const router = Router( { caseSensitive: true });

router.get("/create", productCategoryController.create);
router.get("/update", productCategoryController.update);
router.get("", productCategoryController.index);

export default router;