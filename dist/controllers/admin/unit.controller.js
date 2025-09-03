"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/unit");
};
exports.index = index;
const create = async (req, res) => {
    res.render("admin/pages/unit/create");
};
exports.create = create;
const update = async (req, res) => {
    res.render("admin/pages/unit/update");
};
exports.update = update;
