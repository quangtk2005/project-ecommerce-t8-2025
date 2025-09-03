import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/variant-attributes");
}

export const create = async (req: Request, res: Response) => {
  res.render("admin/pages/variant-attributes/create");
}

export const update = async (req: Request, res: Response) => {
  res.render("admin/pages/variant-attributes/update");
}