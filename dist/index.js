"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set("view engine", "pug");
app.set("views", "views");
app.get("/", (req, res) => {
    res.send("Trang chủ");
});
app.listen(port, () => {
    console.log(`Website đang chạy trên cổng ${port}`);
});
