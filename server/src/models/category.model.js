const mongoose = require("mongoose");



const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category Name is Required"],
        trim: true
    },

    slug: {
        type: String,
        required: [true, "Category Slug is Required"],
        trim: true,
        unique: true,
        lowercase: true
    },

    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },

    description: {
        type: String,
        trim: true,
        default: ""
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);