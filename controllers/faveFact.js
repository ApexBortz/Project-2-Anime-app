const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/favorites', (req, res) => {
    const userId = req.body
    db.faveFact.create({
        
    })
        .then(result => res.json(result))
})

router.delete('/favorites/:favoritesId', (req, res) => {
    const faveId = req.params.fact_id
    db.favorites.delete({
        include: faveId
    })
        .then(result => res.json(result))
})


module.exports = router