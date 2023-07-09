const express = require("express");

const authController = require("../controllers/user");
const { validateSignup, validateLogin } = require("../middlewares/validator");

const router = express.Router();

// Route for user signup
router.post("/signup", validateSignup, authController.signup);

// Route for user login
router.post("/login", validateLogin, authController.login);

module.exports = router;
