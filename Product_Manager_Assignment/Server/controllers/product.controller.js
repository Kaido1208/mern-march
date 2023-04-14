const Product = require("../models/product.model.js");

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts)) 
            .catch((err) => {
                console.log(err);
            })
    },

    getAProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((addProduct) => res.json(addProduct))
            .catch((err) => console.log(err));
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then((newlyUpdateProduct) => {
                console.log(newlyUpdateProduct);
                res.json(newlyUpdateProduct);
            })
            .catch((err) => console.log(err));
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((destroyProduct) => {
                console.log(destroyProduct);
                res.json(destroyProduct);
            })
            .catch((err) => console.log(err));
    }
};
