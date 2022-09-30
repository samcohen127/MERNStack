const Joke = require('../models/joke.model')


module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },
    addJoke: (req, res) => {
        Joke.create(req.body)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },
    updateJoke: (req, res) => {
        Joke.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    },

    deleteJoke: (req, res) => {
        Joke.remove({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    }
}