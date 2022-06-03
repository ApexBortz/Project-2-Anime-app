const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /users/new -- renders a form to create a new user
router.get('/', (req, res) => {
    res.json({message:'im working'})
	// res.render('users/new.ejs', { msg: null })
})

router.get('/search/:animeId', (req, res) => {
    const animeId = req.params.animeId
    db.user.findOne({
        where: { animeId }
        .then(result => res.json(result))
    })
	// res.render('users/new.ejs', { msg: null })
})


router.put('/search/:animeId', (req, res) => {
    const animeId = req.params.animeId
    const factData = req.body
    db.user.findOne({
        where: { animeId }
        .then(result => result.findOrCreate({
            where: {
                factData
            }
        }) .then(result => res.json(result))
        )
    })
	
})

router.get('/favorites', (req, res) => {
    const userId = req.body
    db.favorites.findAll({
        include: [
            {
                model: userId
            }
        ]
    })
        .then(result => res.json(result))
})

router.delete('/favorites/:favoritesId', (req, res) => {
    const faveID = req.params.favoritesId
    db.favorites.delete({
        include: faveId
    })
        .then(result => res.json(result))
})




module.exports = router