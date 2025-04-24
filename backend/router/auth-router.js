import express from "express";
const router = express.Router();
const { home, register } = require("../controllers/auth-controller");

// Routes
router.route("/").get(home);
router.route("/register").get(register);

module.exports = router;
