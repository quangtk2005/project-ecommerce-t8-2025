import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/stock");
}

export const transfer = async (req: Request, res: Response) => {
  res.render("admin/pages/stock/transfer");
}

export const create = async (req: Request, res: Response) => {
  res.render("admin/pages/stock/create");
}

export const update = async (req: Request, res: Response) => {
  res.render("admin/pages/stock/update");
}
