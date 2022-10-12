const AuthorController = require('../controllers/authors.controllers')
const { addAuthor, getAllAuthors, getOneAuthor, updateAuthor, deleteAuthor } = AuthorController


module.exports = (app) => {
    app.get('/api/allAuthors', getAllAuthors)
    app.get('/api/authorPage/:id', getOneAuthor)
    app.post('/api/addAuthor', addAuthor)
    app.put('/api/update/:id', updateAuthor)
    app.delete('/api/delete/:id', deleteAuthor)
}