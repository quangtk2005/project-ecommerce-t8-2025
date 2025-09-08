"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/roles");
};
exports.index = index;
const permission = async (req, res) => {
    res.render("admin/pages/roles/permission");
};
exports.permission = permission;
