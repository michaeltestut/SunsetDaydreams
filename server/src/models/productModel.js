"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    url_slug: {
        type: String,
        required: true,
    },
    images: {
        type: [],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        mainCategory: String,
        required: true,
        subCategories: (Array),
    },
    description: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
});
const ProductModel = mongoose.model("Product", schema);
