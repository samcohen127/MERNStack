const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log('Successfully connected to JokeDB')
}).catch((err) => {
    console.log(err)
})