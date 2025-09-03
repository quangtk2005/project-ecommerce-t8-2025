import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/unit");
}

export const create = async (req: Request, res: Response) => {
  res.render("admin/pages/unit/create");
}

export const update = async (req: Request, res: Response) => {
  res.render("admin/pages/unit/update");
}