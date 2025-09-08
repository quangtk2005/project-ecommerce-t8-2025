"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banIpAddress = exports.currency = exports.taxRates = exports.bank = exports.paymentGateway = exports.gdpr = exports.smsTemplates = exports.sms = exports.emailTemplates = exports.email = exports.customFields = exports.signatures = exports.pos = exports.printer = exports.invoiceTemplates = exports.invoice = exports.socialAuthentication = exports.appearance = exports.preference = exports.prefixes = exports.language = exports.localization = exports.company = exports.system = exports.security = exports.connectedApps = exports.notification = exports.general = void 0;
const general = async (req, res) => {
    res.render("admin/pages/setting/general");
};
exports.general = general;
const notification = async (req, res) => {
    res.render("admin/pages/setting/notification");
};
exports.notification = notification;
const connectedApps = async (req, res) => {
    res.render("admin/pages/setting/connected-apps");
};
exports.connectedApps = connectedApps;
const security = async (req, res) => {
    res.render("admin/pages/setting/security");
};
exports.security = security;
const system = async (req, res) => {
    res.render("admin/pages/setting/system");
};
exports.system = system;
const company = async (req, res) => {
    res.render("admin/pages/setting/company");
};
exports.company = company;
const localization = async (req, res) => {
    res.render("admin/pages/setting/localization");
};
exports.localization = localization;
const language = async (req, res) => {
    res.render("admin/pages/setting/language");
};
exports.language = language;
const prefixes = async (req, res) => {
    res.render("admin/pages/setting/prefixes");
};
exports.prefixes = prefixes;
const preference = async (req, res) => {
    res.render("admin/pages/setting/preference");
};
exports.preference = preference;
const appearance = async (req, res) => {
    res.render("admin/pages/setting/appearance");
};
exports.appearance = appearance;
const socialAuthentication = async (req, res) => {
    res.render("admin/pages/setting/social-authentication");
};
exports.socialAuthentication = socialAuthentication;
const invoice = async (req, res) => {
    res.render("admin/pages/setting/invoice");
};
exports.invoice = invoice;
const invoiceTemplates = async (req, res) => {
    res.render("admin/pages/setting/invoice-templates");
};
exports.invoiceTemplates = invoiceTemplates;
const printer = async (req, res) => {
    res.render("admin/pages/setting/printer");
};
exports.printer = printer;
const pos = async (req, res) => {
    res.render("admin/pages/setting/pos");
};
exports.pos = pos;
const signatures = async (req, res) => {
    res.render("admin/pages/setting/signatures");
};
exports.signatures = signatures;
const customFields = async (req, res) => {
    res.render("admin/pages/setting/custom-fields");
};
exports.customFields = customFields;
const email = async (req, res) => {
    res.render("admin/pages/setting/email");
};
exports.email = email;
const emailTemplates = async (req, res) => {
    res.render("admin/pages/setting/email-templates");
};
exports.emailTemplates = emailTemplates;
const sms = async (req, res) => {
    res.render("admin/pages/setting/sms");
};
exports.sms = sms;
const smsTemplates = async (req, res) => {
    res.render("admin/pages/setting/sms-templates");
};
exports.smsTemplates = smsTemplates;
const gdpr = async (req, res) => {
    res.render("admin/pages/setting/gdpr");
};
exports.gdpr = gdpr;
const paymentGateway = async (req, res) => {
    res.render("admin/pages/setting/payment-gateway");
};
exports.paymentGateway = paymentGateway;
const bank = async (req, res) => {
    res.render("admin/pages/setting/bank");
};
exports.bank = bank;
const taxRates = async (req, res) => {
    res.render("admin/pages/setting/tax-rates");
};
exports.taxRates = taxRates;
const currency = async (req, res) => {
    res.render("admin/pages/setting/currency");
};
exports.currency = currency;
const banIpAddress = async (req, res) => {
    res.render("admin/pages/setting/ban-ip-address");
};
exports.banIpAddress = banIpAddress;
