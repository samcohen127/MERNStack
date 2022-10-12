const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength:[3, "Must be at least 3 characters"],
    }    
}, { timestamps: true })

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author
