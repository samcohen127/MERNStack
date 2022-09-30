const express = require('express')
const app = express()
const PORT = 8001
//require config file
require('./config/mongoose.config')

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Jokes = require('./routes/joke.routes')
Jokes(app)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
