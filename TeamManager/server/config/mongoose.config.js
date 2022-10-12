const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log('Successfully connected to PlayerDB')
}).catch((err) => {
    console.log(err)
})