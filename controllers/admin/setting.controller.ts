import { Request, Response, Router } from "express";

export const system = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/system");
}

export const company = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/company");
}