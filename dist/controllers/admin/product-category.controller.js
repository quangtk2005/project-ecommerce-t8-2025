"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/product-category");
};
exports.index = index;
const create = async (req, res) => {
    res.render("admin/pages/product-category/create");
};
exports.create = create;
const update = async (req, res) => {
    res.render("admin/pages/product-category/update");
};
exports.update = update;
