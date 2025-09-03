import { Request, Response, Router } from "express";
import ColorVariable from "../../models/color-variable.model";

export const dashboard = async (req: Request, res: Response) => {
  res.render("admin/pages/dashboard");
}