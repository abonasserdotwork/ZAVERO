const express = require("express");
const { protect, adminOnly } = require("../middleware/auth.middleware");
const { updateProfile, updatePassword, getAllUsers } = require("../controllers/user.controller.js");
const upload = require("../middleware/upload.middleware.js");

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

router.put("/profile", upload.single("avatar"), updateProfile);
router.put("/password", updatePassword);

router.get("/", adminOnly, getAllUsers);


module.exports = router;