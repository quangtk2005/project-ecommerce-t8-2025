"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/invoice");
};
exports.index = index;
const detail = async (req, res) => {
    res.render("admin/pages/invoice/detail");
};
exports.detail = detail;
