const express = require('express')
const cors = require('cors')
const socket = require('socket.io');
const app = express()
const PORT = 8001

//require config file
require('./config/mongoose.config')

//Middleware for formatting and allowing POST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    cors({
        origin: "http://localhost:3000",
    }),
)
// import routes
const Routes = require('./routes/players.routes')
Routes(app)

// start the server
const server = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", (socket) => {
    console.log('Server side socket id: ' + socket.id);

    socket.on('added_new_player', (data) => {
        socket.broadcast.emit('added_player', data);
    });
    socket.on('deleted_player', (playerId) => {
        socket.broadcast.emit('player_deleted', playerId);
    });


});

