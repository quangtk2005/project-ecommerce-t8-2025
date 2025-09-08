import { Request, Response, Router } from "express";

export const general = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/general");
}

export const notification = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/notification");
}

export const connectedApps = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/connected-apps");
}

export const security = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/security");
}

export const system = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/system");
}

export const company = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/company");
}

export const localization = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/localization");
}

export const language = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/language");
}

export const prefixes = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/prefixes");
}

export const preference = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/preference");
}

export const appearance = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/appearance");
}

export const socialAuthentication = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/social-authentication");
}

export const invoice = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/invoice");
}

export const invoiceTemplates = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/invoice-templates");
}

export const printer = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/printer");
}

export const pos = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/pos");
}

export const signatures = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/signatures");
}

export const customFields = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/custom-fields");
}

export const email = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/email");
}

export const emailTemplates = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/email-templates");
}

export const sms = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/sms");
}

export const smsTemplates = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/sms-templates");
}

export const gdpr = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/gdpr");
}

export const paymentGateway = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/payment-gateway");
}

export const bank = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/bank");
}

export const taxRates = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/tax-rates");
}

export const currency = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/currency");
}

export const banIpAddress = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/ban-ip-address");
}