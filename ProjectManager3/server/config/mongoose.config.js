const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log('Successfully connected to ProductDB')
}).catch((err) => {
    console.log(err)
})