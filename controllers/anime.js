const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /users/new -- renders a form to create a new user
router.get('/', (req, res) => {
    res.json({message:'im working'})
	// res.render('users/new.ejs', { msg: null })
})

// router.get('/', (req, res)=>{
//     let anime = fs.readFileSync('./anime.json')
//     let animeData = JSON.parse(anime)

//     let nameFilter = req.query.nameFilter
//     if(nameFilter) {
//         animeData = animeData.filter(anime=>anime.name.toLowerCase()===nameFilter.toLowerCase())
//     }

//     res.render('anime/index.ejs', {myDinos: dinoData})
// })

//display search form
// router.get('/new', async (req, res) => {
//     res.render('authors/new')
//   })

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


module.exports = router