"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product = require('../models/productModel');
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then((product) => response.json(product))
        .catch((err) => response.json(err));
};
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then((allProducts) => { response.json(allProducts); })
        .catch((err) => response.json(err));
};
module.exports.getOneProduct = (request, response) => {
    Product.findOne({ _id: request.params.url_slug })
        .then((product) => response.json(product))
        .catch((err) => response.json(err));
};
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.url_slug }, request.body, { new: true })
        .then((updatedProduct) => response.json(updatedProduct))
        .catch((err) => response.json(err));
};
// module.exports.deleteProduct = (request:Request, response:Response)=>{
//     Product.deleteOne({_id:request.params.id})
//     .then(deleteConfirmation => response.json(deleteConfirmation))
//     .catch((err:Error)=>response.json(err))
// }
