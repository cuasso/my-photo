const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const router = express.Router()
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model('Post')

router.get('/allpost', (req, res) => {
    Post.find()
        .populate('posttedBy', '_id name')
        .then(posts => {
            res.json({ posts })
        }).catch(err => console.log(err))
})

router.post('/createpost', requireLogin, (req, res) => {
    const { title, body, pic } = req.body
    if (!title || !body || !pic) res.status(422).json({ error: 'please add all fields' })

    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo: pic,
        posttedBy: req.user
    })
    post.save().then(result => {
        res.json({ post: result })
    }).catch(err => console.log(err))

})

router.get('/mypost', requireLogin, (req, res) => {
    Post.find({ posttedBy: req.user._id })
        .populate('posttedBy', '_id name')
        .then(myposts => {
            res.json({ myposts })
        }).catch(err => console.log(err))
})

module.exports = router