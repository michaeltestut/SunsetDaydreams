import express, { Express, Request, Response } from "express";
const Product = require('../models/productModel')

module.exports.createProduct = (request:Request, response:Response)=>{
    Product.create(request.body)
    .then((product:typeof Product) => response.json(product))
    .catch((err:Error) => response.json(err));
}

module.exports.getAllProducts = (request:Request, response:Response)=>{
    Product.find({})
    .then((allProducts:typeof Product[])=>{response.json(allProducts)})
    .catch((err:Error)=>response.json(err));
}

module.exports.getOneProduct = (request:Request, response:Response)=>{
    Product.findOne({_id:request.params.url_slug})
    .then((product:typeof Product)=>response.json(product))
    .catch((err:Error)=>response.json(err));
}

module.exports.updateProduct = (request:Request, response:Response)=>{
    Product.findOneAndUpdate({_id:request.params.url_slug}, request.body, {new:true})
    .then((updatedProduct:typeof Product)=>response.json(updatedProduct))
    .catch((err:Error)=>response.json(err))
}

// module.exports.deleteProduct = (request:Request, response:Response)=>{
//     Product.deleteOne({_id:request.params.id})
//     .then(deleteConfirmation => response.json(deleteConfirmation))
//     .catch((err:Error)=>response.json(err))
// }