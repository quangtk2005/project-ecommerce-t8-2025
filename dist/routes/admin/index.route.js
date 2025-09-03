"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const dashboard_route_1 = __importDefault(require("./dashboard.route"));
const products_routes_1 = __importDefault(require("./products.routes"));
const product_category_routes_1 = __importDefault(require("./product-category.routes"));
const brand_routes_1 = __importDefault(require("./brand.routes"));
const unit_routes_1 = __importDefault(require("./unit.routes"));
const variant_attributes_routes_1 = __importDefault(require("./variant-attributes.routes"));
const warranty_routes_1 = __importDefault(require("./warranty.routes"));
const barcode_routes_1 = __importDefault(require("./barcode.routes"));
const stock_routes_1 = __importDefault(require("./stock.routes"));
const order_routes_1 = __importDefault(require("./order.routes"));
const pos_routes_1 = __importDefault(require("./pos.routes"));
const invoice_routes_1 = __importDefault(require("./invoice.routes"));
const quotation_routes_1 = __importDefault(require("./quotation.routes"));
const coupons_routes_1 = __importDefault(require("./coupons.routes"));
const giftCards_routes_1 = __importDefault(require("./giftCards.routes"));
const purchase_routes_1 = __importDefault(require("./purchase.routes"));
const purchase_return_routes_1 = __importDefault(require("./purchase-return.routes"));
const setting_routes_1 = __importDefault(require("./setting.routes"));
const adminMiddlewares = __importStar(require("../../middlewares/admin/middlewares"));
router.use(adminMiddlewares.checkInternet);
router.use("/dashboard", dashboard_route_1.default);
router.use("/product", products_routes_1.default);
router.use("/category", product_category_routes_1.default);
router.use("/brand", brand_routes_1.default);
router.use("/unit", unit_routes_1.default);
router.use("/attribute", variant_attributes_routes_1.default);
router.use("/warranty", warranty_routes_1.default);
router.use("/barcode", barcode_routes_1.default);
router.use("/stock", stock_routes_1.default);
router.use("/order", order_routes_1.default);
router.use("/pos", pos_routes_1.default);
router.use("/invoice", invoice_routes_1.default);
router.use("/quotation", quotation_routes_1.default);
router.use("/coupons", coupons_routes_1.default);
router.use("/gift-cards", giftCards_routes_1.default);
router.use("/purchase", purchase_routes_1.default);
router.use("/purchase-return", purchase_return_routes_1.default);
router.use("/setting", setting_routes_1.default);
router.all('{*splat}', (req, res) => {
    res.status(404).render("admin/pages/status/404");
});
exports.default = router;
