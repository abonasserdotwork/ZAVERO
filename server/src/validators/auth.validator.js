const { body } = require("express-validator");

const registerValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required"),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
];


const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Please provide a valid email"),

    body("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password is required")
];


module.exports = {
    registerValidator,
    loginValidator
};