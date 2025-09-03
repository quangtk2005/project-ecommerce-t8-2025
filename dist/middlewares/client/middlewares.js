"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.checkInternet = void 0;
const node_wifi_1 = __importDefault(require("node-wifi"));
const checkInternet = async (req, res, next) => {
    node_wifi_1.default.init({
        iface: null
    });
    node_wifi_1.default.getCurrentConnections((error, currentConnections) => {
        if (error) {
            console.log(error);
        }
        else {
            if (currentConnections.length > 0) {
                next();
            }
            else {
                return res.render("client/pages/status/no-internet");
            }
        }
    });
};
exports.checkInternet = checkInternet;
const notFound = async (req, res, next) => {
    res.status(404).render("client/pages/status/404");
};
exports.notFound = notFound;
