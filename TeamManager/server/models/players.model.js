const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength:[2, "Must be at least 2 characters"],
    },   
    position: {
        type: String,
    },   
}, { timestamps: true })

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player
