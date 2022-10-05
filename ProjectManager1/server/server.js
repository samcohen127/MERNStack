const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8001
require('./config/mongoose.config')

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: "http://localhost:3000",
    }),
)

const Routes = require('./routes/product.routes')
Routes(app)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
