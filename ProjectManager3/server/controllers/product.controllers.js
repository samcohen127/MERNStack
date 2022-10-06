const Product = require('../models/product.models')


module.exports = {
    getAllProducts: (req, res) => {
        Product.find()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },
    getOneproduct: (req, res) => {
        Product.findById(req.params.id)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },
    addProduct: (req, res) => {
        Product.create(req.body)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },
    updatProduct: (req, res) => {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },

    deleteProduct: (req, res) => {
        Product.remove({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    }
}
