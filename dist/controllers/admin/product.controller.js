"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/product");
};
exports.index = index;
const create = async (req, res) => {
    res.render("admin/pages/product/create");
};
exports.create = create;
const update = async (req, res) => {
    res.render("admin/pages/product/update");
};
exports.update = update;
