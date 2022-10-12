const Player = require('../models/players.model')


module.exports = {
    getAllPlayers: (req, res) => {
        Player.find()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    getOnePlayer: (req, res) => {
        Player.findById(req.params.id)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    addPlayer: (req, res) => {
        Player.create(req.body)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    updatePlayer: (req, res) => {
        Player.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },

    deletePlayer: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(400).json(err)
            })
    }
}