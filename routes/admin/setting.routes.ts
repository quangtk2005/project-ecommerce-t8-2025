import { Request, Response, Router } from "express";
import * as settingController from "../../controllers/admin/setting.controller";
const router = Router( { caseSensitive: true });

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

export default router;