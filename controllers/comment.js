const express = require('express')
const router = express.Router()
const db = require('../models')


router.post('/favefacts/:favoriteId/comment', async (req, res) => {
    // res.json({message:'im working'})
    // render comment page
    try{
        console.log('content CONTENT cOnTeNt', req.body.content)
        const comment = await db.comment.create({
            factId: req.body.factId,
            animeName: req.body.animeName,
            content: req.body.content,
            userId: res.locals.user.id
        })
            res.redirect('/users/profile')
        } catch(error){
            console.log(error)
        res.status(400).render('main/404')
    }
      // res.redirect to the users profi
})


module.exports = router