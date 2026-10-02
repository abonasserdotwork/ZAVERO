const mongoose = require("mongoose");


const CartItemSchema = new mongoose.Schema({

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product is Required"]
    },


    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: [1, "Quantity must have at least 1"],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number"
        },
    },




}, { _id: false });


const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"],
        unique: true,
    },
    items: {
        type: [CartItemSchema],
        default: []
    },
}, { timestamps: true });


module.exports = mongoose.model("Cart", CartSchema);