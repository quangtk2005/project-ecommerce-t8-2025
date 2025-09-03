"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.transfer = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/stock");
};
exports.index = index;
const transfer = async (req, res) => {
    res.render("admin/pages/stock/transfer");
};
exports.transfer = transfer;
const create = async (req, res) => {
    res.render("admin/pages/stock/create");
};
exports.create = create;
const update = async (req, res) => {
    res.render("admin/pages/stock/update");
};
exports.update = update;
