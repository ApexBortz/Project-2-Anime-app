const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/', (req, res) => {
        // look at omdb pt 2
        // accept form data in the req.body & save to favorites database (await db.favefact.create)
        // res.redirect to the users profile
})

router.delete('/favorites/:favoritesId', (req, res) => {
    const faveId = req.params.fact_id
    db.favorites.delete({
        include: faveId
    })
        .then(result => res.json(result))
})


module.exports = router