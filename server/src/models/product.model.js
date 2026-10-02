const mongoose = require("mongoose");



const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title is Required"],
        trim: true
    },

    slug: {
        type: String,
        required: [true, "Product Slug is Required"],
        trim: true,
        unique: true
    },

    description: {
        type: String,
        required: [true, "Product Description is Required"],
        trim: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "Product Category is Required"],
    },

    price: {
        type: Number,
        required: [true, "Product Price is Required"],
        min: [0, "Price Cannot be Negative"],
    },

    salePrice: {
        type: Number,
        default: null,
        min: [0, "Product SalePrice Cannot be Negative"],
    },

    stock: {
        type: Number,
        required: true,
        default: 0,
        min: [0, "Stock Cannot be negative"],
        validate: {
            validator: Number.isInteger,
            message: "Stock Must be a whole Number",
        },
    },

    images: {
        type: [String],
        default: []
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },

    numReviews: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true
});


ProductSchema.pre("save", async () => {
    if (!this.isModified('name')) return;

    const baseSlug = this.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    this.slug = `${baseSlug}-${this._id}`;

});


ProductSchema.index({ category: 1, price: 1 });


module.exports = mongoose.model('Product', ProductSchema);