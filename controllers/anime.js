const express = require('express')
const axios = require('axios')
const router = express.Router()
const db = require('../models')

// GET /users/new -- renders a form to create a new user
router.get('/', (req, res) => {
    // res.json({message:'im working'})
    // render the search.ejs
    res.render('search.ejs')
})

router.get('/results', async (req, res) => {
    // accepts data from search form using the req.query
    // uses axios to get data from the anime api
    // renders the search data from the api (results) (omdb pt 1 and starwars code along data into search values)
    try {
        const searchUrl = `https://anime-facts-rest-api.herokuapp.com/api/v1/${req.query.animeSearch}`
        const response = await axios.get(searchUrl)
        
        res.render('results.ejs', {
            facts: response.data.data,
            input: req.query.animeSearch
        })
    } catch(err) {
        console.log(err)
    }
})

// router.get('/search/:animeId', (req, res) => {
//     const animeId = req.params.animeId
//     db.user.findOne({
//         where: { animeId }
//         .then(result => res.json(result))
//     })
// 	// res.render('users/new.ejs', { msg: null })
// })


module.exports = router