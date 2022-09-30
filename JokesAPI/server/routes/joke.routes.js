const JokesController = require('../controllers/joke.controllers')
const { addJoke, getAllJokes, getOneJoke, updateJoke, deleteJoke } = JokesController


module.exports = (app) => {
    app.get('/api/allJokes', getAllJokes)
    app.get('/api/getJoke/:id', getOneJoke)
    app.post('/api/addJoke', addJoke)
    app.put('/api/update/:id', updateJoke)
    app.delete('/api/delete/:id', deleteJoke)
}