"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_route_1 = __importDefault(require("./home.route"));
const router = (0, express_1.Router)();
router.use('/', home_route_1.default);
router.all('{*splat}', (req, res) => {
    res.status(404).render("client/pages/status/404");
});
exports.default = router;
