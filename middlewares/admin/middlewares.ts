import { Request, Response, NextFunction } from "express";
import wifi from 'node-wifi';
import ColorVariable from "../../models/color-variable.model";

export const checkInternet = async (req: Request, res: Response, next: NextFunction) => {
  const colorVariable = await ColorVariable.findOne({}).lean();
  res.locals.COLOR = colorVariable;
  if (colorVariable) {
    const skip = new Set(["_id", "__v", "createdAt", "updatedAt"]);
    const css = Object.entries(colorVariable)
      .filter(([k]) => !skip.has(k))
      .map(([k, v]) => `--${k}: ${v};`)
      .join("\n  ");
    res.locals.COLOR_ROOT = css;
  }

  wifi.init({
    iface: null
  });

  wifi.getCurrentConnections((error, currentConnections) => {
    if (error) {
      console.log(error);
      // return res.render("admin/pages/status/no-internet");
      next();
    }
    if(currentConnections.length > 0) next()
    else return res.render("admin/pages/status/no-internet");
  });
}

export const notFound = async (req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("admin/pages/status/404");
}