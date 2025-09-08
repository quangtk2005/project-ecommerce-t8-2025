import express, { Application, Request, Response } from "express";
import "dotenv/config";
import clientRouter from "./routes/client/index.route";
import adminRouter from "./routes/admin/index.route";
import * as databaseConnect from "./configs/mongodb.connect";

const app: Application = express();
const port: Number = parseInt(process.env.PORT as string) || 3000;

databaseConnect.mongodbConnect();
app.use((req: Request, res: Response, next) => {
  if (req.url) {
    req.url = decodeURIComponent(req.url);
  }
  next();
});

app.use(express.static(`${__dirname}/public`));
app.use("/admin", adminRouter);
app.use(clientRouter);

app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

app.listen(port, () => {
    console.log(`Website đang chạy trên cổng ${port}`);
});
