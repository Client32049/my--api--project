const express = require("express");

const { login } = require("../controllers/authController");

const router = express.Router();
router.post("/login", login);

module.exports = {
    authRoutes: router // Updated export to match the import in your main file
};