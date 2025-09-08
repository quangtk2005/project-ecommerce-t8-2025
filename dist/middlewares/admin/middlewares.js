"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.checkInternet = void 0;
const node_wifi_1 = __importDefault(require("node-wifi"));
const checkInternet = async (req, res, next) => {
    res.locals.prefixAdmin = "/admin";
    node_wifi_1.default.init({
        iface: null
    });
    node_wifi_1.default.getCurrentConnections((error, currentConnections) => {
        if (error) {
            next();
        }
        if (currentConnections.length > 0)
            next();
        else
            return res.render("admin/pages/status/no-internet");
    });
};
exports.checkInternet = checkInternet;
const notFound = async (req, res, next) => {
    res.status(404).render("admin/pages/status/404");
};
exports.notFound = notFound;
