"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returns = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/purchase");
};
exports.index = index;
const returns = async (req, res) => {
    res.render("admin/pages/purchase-return");
};
exports.returns = returns;
