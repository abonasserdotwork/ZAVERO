const User = require("../models/user.model");



const registerUser = async (req, res, next) => {

    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(409).json({ message: "Email is already registerd" });

        const user = await User.create({
            name,
            email,
            password,
        });

        const token = user.generateToken();

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            samesite: "strict",
            maxAge: 15 * 60 * 1000,
        });

        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified
            },
        });


    } catch (err) {
        next(err);
    }

};


const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        console.log({
            userFound: !!user,
            passwordExists: !!user?.password,
        });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                message: "Invaild email or password",
            });
        }

        const token = user.generateToken();

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            samesite: "strict",
            maxAge: 15 * 60 * 1000,
        });

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified,
            },
        });
    } catch (err) {
        next(err);
    }
}

const logoutUser = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    return res.status(200).json({
        message: "Logout successful"
    });
}


const getMe = async (req, res) => {
    return res.status(200).json({
        user: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role,
            isVerified: req.user.isVerified,
        },
    });
};

module.exports = { registerUser, loginUser, logoutUser, getMe };