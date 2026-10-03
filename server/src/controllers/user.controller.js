const User = require("../models/user.model.js");
const { asyncHandler } = require("../utils/asyncHandler.js");


const updateProfile = asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (email && email !== user.email) {
        const existingUser = await User.findOne({ email, _id: { $ne: user._id } });

        if (existingUser) return res.status(409).json({ message: "Email is already in use" });

        user.email = email;
    }

    if (name) {
        user.name = name;
    }

    if (req.file) {
        user.avatar = `/uploads/${req.file.filename}`;
    }

    await user.save();

    return res.status(200).json({
        message: "Profile updated successfully",
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            isVerfied: user.isVerified,
            avatar: user.avatar
        },
    });

});

const updatePassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) return res.status(400).json({ message: "Current password and new password are required" });

    if (newPassword.length < 8) return res.status(400).json({ message: "New password should be more than 8 characters" });

    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.matchPassword(currentPassword);

    if (!isMatch) return res.status(400).json({ message: "Current password is incorrect" });

    user.password = newPassword;

    await user.save();


    return res.status(200).json({
        message: "Password updated successfully",
    });
});

const getAllUsers = asyncHandler(async (req, res) => {
    //    throw new Error("Testing error");

    const users = await User.find({});

    return res.status(200).json({
        count: users.length,
        users,
    });
});

module.exports = { updateProfile, updatePassword, getAllUsers };