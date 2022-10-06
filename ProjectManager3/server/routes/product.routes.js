const ProductController = require('../controllers/product.controllers')
const { getAllProducts, getOneproduct, addProduct, updatProduct, deleteProduct } = ProductController


module.exports = (app) => {
    app.get('/api/allProducts', getAllProducts)
    app.get('/api/findById/:id', getOneproduct)
    app.post('/api/addProduct', addProduct)
    app.put('/api/update/:id', updatProduct)
    app.delete('/api/delete/:id', deleteProduct)
}