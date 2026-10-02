const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");


const protect = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) return res.status(401).json({ message: "Not authorized access" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Not authorized, invalid token" });
    }
}

const adminOnly = async (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    }

    return res.status(403).json({
        message: "Access denied"
    });
}

module.exports = { protect, adminOnly };