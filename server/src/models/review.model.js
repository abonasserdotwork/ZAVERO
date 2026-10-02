const mongoose = require("mongoose");



const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is Required"]
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product is Required"],
    },

    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating Must Be At least 1"],
        max: [5, "Rating cannot exceed 5"],
    },

    comments: {
        type: String,
        trim: true,
        default: ""
    },
}, { timestamps: true });


ReviewSchema.index({ user: 1, product: 1 }, { unique: true });

module.exports = mongoose.model("Review", ReviewSchema);