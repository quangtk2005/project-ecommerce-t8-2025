"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodbConnect = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("Kết nối database thành công!");
    }
    catch (error) {
        console.log("Kết nối database thất bại!");
    }
};
exports.mongodbConnect = mongodbConnect;
