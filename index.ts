import express from "express";
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Trang chủ")
});

app.listen(port, () => {
    console.log(`Website đang chạy trên cổng ${port}`);
});
