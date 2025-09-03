import { Request, Response, NextFunction } from "express";
import wifi from 'node-wifi';

export const checkInternet = async (req: Request, res: Response, next: NextFunction) => {
  wifi.init({
    iface: null
  });

  wifi.getCurrentConnections((error, currentConnections) => {
    if (error) {
      console.log(error);
    } else {
      if(currentConnections.length > 0){
        next()
      } else {
        return res.render("client/pages/status/no-internet");
      }
    }
  });
}

export const notFound = async (req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("client/pages/status/404");
}