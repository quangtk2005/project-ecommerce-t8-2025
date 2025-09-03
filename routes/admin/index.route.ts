import express, { Request, Response, Router } from "express";
const router = Router();
import dashboard from "./dashboard.route";
import product from "./products.routes";
import productCategory from "./product-category.routes";
import brand from "./brand.routes";
import unit from "./unit.routes";
import variantAttributes from "./variant-attributes.routes";
import warranty from "./warranty.routes";
import barcode from "./barcode.routes";
import stock from "./stock.routes";
import order from "./order.routes";
import pos from "./pos.routes";
import invoice from "./invoice.routes";
import quotation from "./quotation.routes";
import coupons from "./coupons.routes";
import giftCards from "./giftCards.routes";
import purchase from "./purchase.routes";
import purchaseReturn from "./purchase-return.routes";
import setting from "./setting.routes";
import * as adminMiddlewares from "../../middlewares/admin/middlewares";

router.use(adminMiddlewares.checkInternet)
router.use("/dashboard", dashboard)
router.use("/product", product)
router.use("/category", productCategory)
router.use("/brand", brand)
router.use("/unit", unit)
router.use("/attribute", variantAttributes)
router.use("/warranty", warranty)
router.use("/barcode", barcode)
router.use("/stock", stock)
router.use("/order", order)
router.use("/pos", pos)
router.use("/invoice", invoice)
router.use("/quotation", quotation)
router.use("/coupons", coupons)
router.use("/gift-cards", giftCards)
router.use("/purchase", purchase)
router.use("/purchase-return", purchaseReturn)
router.use("/setting", setting)

router.all('{*splat}', (req: Request, res: Response) => {
  res.status(404).render("admin/pages/status/404");
});
export default router;