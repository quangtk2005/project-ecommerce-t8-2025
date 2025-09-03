"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)({ caseSensitive: true });
router.get("", (req, res) => {
    res.send("TRANG CHỦ");
});
exports.default = router;
