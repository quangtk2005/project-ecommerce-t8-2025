import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/warranty");
}

export const create = async (req: Request, res: Response) => {
  res.render("admin/pages/warranty/create");
}

export const update = async (req: Request, res: Response) => {
  res.render("admin/pages/warranty/update");
}