import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/product-category");
}

export const create = async (req: Request, res: Response) => {
  res.render("admin/pages/product-category/create");
}

export const update = async (req: Request, res: Response) => {
  res.render("admin/pages/product-category/update");
}