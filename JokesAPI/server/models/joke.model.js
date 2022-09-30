const mongoose = require('mongoose')

const JokeSchema = mongoose.Schema({
    setup: {
        type: String,
    },
    punchline: {
        type: String
    }
    

},{timestamps:true})

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke