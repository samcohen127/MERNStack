const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authordb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log('Successfully connected to AuthorDB')
}).catch((err) => {
    console.log(err)
})