const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product is Required"],
    },

    name: {
        type: String,
        required: [true, "Product name is Required"],
        trim: true,
    },


    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price cannot be negative"],
    },


    quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number"
        }
    },

}, { _id: false });


const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is Required"]
    },

    items: {
        type: [OrderItemSchema],
        required: true,
        validate: {
            validator: (items) => items.length > 0,
            message: "An Order must contain at least one items",
        },
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Paid",
            "Processing",
            "Shipped",
            "Delivered",
            "Cancelled",
            "Refunded",
        ],

        default: "Pending",
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0,
        min: [0, "Total price cannot be negative"]
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Order", OrderSchema);