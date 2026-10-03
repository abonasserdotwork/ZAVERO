const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const protect = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.token;

    if (!token) return res.status(401).json({ message: "Not authorized access" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });


    if (!user) {
        return res.status(401).json({ message: "User not found" });
    }

    req.user = user;

    return next();

});

const adminOnly = async (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    }

    return res.status(403).json({
        message: "Access denied"
    });
}

module.exports = { protect, adminOnly };