import { Request, Response, Router } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/roles");
}

export const permission = async (req: Request, res: Response) => {
  res.render("admin/pages/roles/permission");
}