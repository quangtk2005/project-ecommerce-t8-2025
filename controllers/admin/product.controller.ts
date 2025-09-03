import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/product");
}

export const create = async (req: Request, res: Response) => {
  res.render("admin/pages/product/create");
}

export const update = async (req: Request, res: Response) => {
  res.render("admin/pages/product/update");
}