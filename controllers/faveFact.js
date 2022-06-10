const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/', async (req, res) => {
        // look at omdb pt 2
        // accept form data in the req.body & save to favorites database (await db.favefact.create)
      try{
        const faveFact = await db.faveFact.create({
            factId: req.body.factId,
            animeName: req.body.animeName,
            fact: req.body.fact,
            userId: res.locals.user.id
        })
            res.redirect('/users/profile')
        } catch(error){
            console.log(error)
        res.status(400).render('main/404')
    }
      // res.redirect to the users profile
})

router.get('/:favoritesId', (req, res) => {
    
    res.render('search.ejs')
})


router.delete('/favorites/:favoritesId', async (req, res) => {
    const faveId = req.params.favoritesId
    const fave = await db.faveFact.findOne({
        where: {
            id: faveId
        }
    })
    await fave.destroy()
    res.redirect('/users/profile')
})


module.exports = router