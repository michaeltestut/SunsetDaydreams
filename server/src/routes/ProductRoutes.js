"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const { getAllProducts, createProduct, getOneProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const ProductController = require('../controllers/product.controller');
//client
// router
// .route("/api/products")
// .get(getAllProducts)
// router
//     .route("api/product/:url_slug")
//     .get(getOneProduct)
//admin
router
    .route("/api/admin/product/new")
    .post(createProduct);
router
    .route("/api/admin/product/:url_slug")
    .push(updateProduct);
module.exports = router;
