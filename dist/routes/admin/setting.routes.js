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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settingController = __importStar(require("../../controllers/admin/setting.controller"));
const router = (0, express_1.Router)({ caseSensitive: true });
router.get("/general", settingController.general);
router.get("/security", settingController.security);
router.get("/notification", settingController.notification);
router.get("/connected-apps", settingController.connectedApps);
router.get("/system", settingController.system);
router.get("/company", settingController.company);
router.get("/prefixes", settingController.prefixes);
router.get("/localization", settingController.localization);
router.get("/language", settingController.language);
router.get("/preference", settingController.preference);
router.get("/appearance", settingController.appearance);
router.get("/social-authentication", settingController.socialAuthentication);
router.get("/invoice", settingController.invoice);
router.get("/invoice-templates", settingController.invoiceTemplates);
router.get("/printer", settingController.printer);
router.get("/pos", settingController.pos);
router.get("/signatures", settingController.signatures);
router.get("/custom-fields", settingController.customFields);
router.get("/email", settingController.email);
router.get("/email-templates", settingController.emailTemplates);
router.get("/sms", settingController.sms);
router.get("/sms-templates", settingController.smsTemplates);
router.get("/gdpr", settingController.gdpr);
router.get("/payment-gateway", settingController.paymentGateway);
router.get("/bank", settingController.bank);
router.get("/tax-rates", settingController.taxRates);
router.get("/currency", settingController.currency);
router.get("/ban-ip-address", settingController.banIpAddress);
exports.default = router;
