const express = require('express')
const router = express.Router()
const db = require('../models')


router.post('/newComment', async (req, res) => {
    // res.json({message:'im working'})
    // render comment page
    console.log('consoollelelelelelele',req.body)
    try{
        // console.log('content CONTENT cOnTeNt', req.body.content)
        const [comment, created] = await db.comment.findOrCreate({
            where:{
                animeName: req.body.animeName,
                animeId: req.body.factId,
                content: req.body.content,
                userId: res.locals.user.id
            }
        })
            res.redirect('/faveFact/favorites')
        } catch(error){
            console.log(error)
        res.status(400).render('main/404')
    }
      // res.redirect to the users profi
})


module.exports = router