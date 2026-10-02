const express = require("express");


const { registerUser, loginUser, logoutUser, getMe } = require("../controllers/auth.controller.js");
const { registerValidator, loginValidator } = require("../validators/auth.validator.js");
const { protect } = require("../middleware/auth.middleware.js");

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getMe);

module.exports = router;