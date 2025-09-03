"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/barcode");
};
exports.index = index;
const create = async (req, res) => {
    res.render("admin/pages/barcode/create");
};
exports.create = create;
const update = async (req, res) => {
    res.render("admin/pages/barcode/update");
};
exports.update = update;
