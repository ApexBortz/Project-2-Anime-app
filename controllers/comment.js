const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/favefacts/:favoriteId/comment', (req, res) => {
    // res.json({message:'im working'})
    // render comment page
    res.render('comment.ejs')
})


module.exports = router