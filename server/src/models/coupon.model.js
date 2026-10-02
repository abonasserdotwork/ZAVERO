const mongoose = require("mongoose");



const CouponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    discountType: {
        type: String,
        required: true,
        enum: ["percentage", "fixed"],
    },

    discountValue: {
        type: Number,
        required: true,
        min: [0, "Discount cannot be negative"],
    },

    expiresAt: {
        type: Date,
        required: true
    },

    usageLimit: {
        type: Number,
        required: true,
        min: [1, "Usage limit must be at least 1"],
    },

    usageCount: {
        type: Number,
        default: 0,
        min: [0, "Usage count cannot be negative"]
    },

    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });


module.exports = mongoose.model("Coupon", CouponSchema);