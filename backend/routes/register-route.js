const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/register-model');

//create an instance express
const app = express();
app.use(express.json())


//Get All Post
router.get('/', async (req, res) => {
    try {
        const user = await RegisterModel.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await RegisterModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Post not found" })
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Create a new post
router.post('/', async (req, res) => {
    const user = new RegisterModel({
        username: req.body.username,
        mailId: req.body.mailId,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
    });
    try {
        await user.save();
        res.status(201).json(user);
        console.log(user)
    } catch (error) {
        return res.status(404).json({ message: error })
    }
})

//update an existing post
router.put('/:id', async (req, res) => {
    try {
        const user = await RegisterModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Post not found" })
        }
        post.username = req.body.username || post.username
        post.password = req.body.password || post.password
        post.mailId = req.body.mailId || post.mailId
        post.confirmpassword = req.body.confirmpassword || post.confirmpassword

        const updatedPost = await user.save()
        res.json(updatedPost)

    } catch (error) {
        return res.status(404).json({ message: "Post not found" })
    }
})

//Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const user = await RegisterModel.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "Post not Found" })
        }
        //await Post.deleteOne({ _id: post._id })
        await RegisterModel.findByIdAndDelete(req.params.id)
        res.json({ message: "Post Deleted" })
    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "htfdhgfc" });
    }
})

module.exports = router;













