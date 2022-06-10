const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/', async (req, res) => {
        // accept form data in the req.body & save to favorites database
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

router.get('/favorites', async (req, res) => {
    if (!res.locals.user) {
		// if the user is not authorized, ask them to log in
		res.render('users/login.ejs', { msg: 'please log in to continue' })
		return // end the route here
	}
	// find currently logged in users favorites
	const favorites = await res.locals.user.getFaveFacts()
	
	// render the favorites on the profile page
	// console.log('favorites')
	res.render('users/favorites.ejs', { user: res.locals.user, faveFacts: favorites })
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