const PlayerController = require('../controllers/players.controllers')
const { addPlayer, getAllPlayers, getOnePlayer, updatePlayer, deletePlayer } = PlayerController


module.exports = (app) => {
    app.get('/api/allPlayers', getAllPlayers)
    app.get('/api/playerPage/:id', getOnePlayer)
    app.post('/api/addPlayer', addPlayer)
    app.put('/api/update/:id', updatePlayer)
    app.delete('/api/delete/:id', deletePlayer)
}