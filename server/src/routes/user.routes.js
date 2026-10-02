const express = require("express");
const { protect } = require("../middleware/auth.middleware");


const router = express.Router();


//middleware
router.use(protect);


//routes
router.get("/me", (req, res) => {
    return res.status(200).json({
        user: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role,
            isVerified: req.user.isVerified,
        },
    })
});

module.exports = router;