"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.checkInternet = void 0;
const node_wifi_1 = __importDefault(require("node-wifi"));
const color_variable_model_1 = __importDefault(require("../../models/color-variable.model"));
const checkInternet = async (req, res, next) => {
    const colorVariable = await color_variable_model_1.default.findOne({}).lean();
    res.locals.COLOR = colorVariable;
    if (colorVariable) {
        const skip = new Set(["_id", "__v", "createdAt", "updatedAt"]);
        const css = Object.entries(colorVariable)
            .filter(([k]) => !skip.has(k))
            .map(([k, v]) => `--${k}: ${v};`)
            .join("\n  ");
        res.locals.COLOR_ROOT = css;
    }
    node_wifi_1.default.init({
        iface: null
    });
    node_wifi_1.default.getCurrentConnections((error, currentConnections) => {
        if (error) {
            console.log(error);
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
