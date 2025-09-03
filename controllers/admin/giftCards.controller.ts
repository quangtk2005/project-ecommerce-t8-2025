import { Request, Response, Router } from "express";
import ColorVariable from "../../models/color-variable.model";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/gift-cards");
}