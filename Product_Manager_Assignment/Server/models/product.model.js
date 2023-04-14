const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timestamps: true})

const Product = mongoose.model("Product", Schema);

module.exports = Product;