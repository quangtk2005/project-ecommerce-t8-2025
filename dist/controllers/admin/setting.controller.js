"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.company = exports.system = void 0;
const system = async (req, res) => {
    res.render("admin/pages/setting/system");
};
exports.system = system;
const company = async (req, res) => {
    res.render("admin/pages/setting/company");
};
exports.company = company;
