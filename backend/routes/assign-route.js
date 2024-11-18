const express = require('express');
const router = express.Router();
const AssignModel = require('../models/assign-model');

//create an instance express
const app = express();
app.use(express.json())


//Get All Post
router.get('/', async (req, res) => {
    try {
        const assigns = await AssignModel.find();
        res.json(assigns);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const assigns = await AssignModel.findById(req.params.id);
        if (!assigns) {
            return res.status(404).json({ message: "Post not found" })
        }
        res.json(assigns);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Create a new post
router.post('/', async (req, res) => {
    const assigns = new AssignModel({
        Aname: req.body.Aname,
        Question: req.body.Question,
        AssignmentID: req.body.AssignmentID,
        subDate: req.body.subDate,
        checkVal: req.body.checkVal,
    });
    try {
        await assigns.save();
        res.status(201).json(assigns);
        console.log(assigns)
    } catch (error) {
        return res.status(404).json({ message: error })
    }
})

//update an existing post
router.put('/:id', async (req, res) => {
    try {
        const assigns = await AssignModel.findById(req.params.id);
        if (!assigns) {
            return res.status(404).json({ message: "Post not found" })
        }
        post.Aname = req.body.Aname || post.Aname
        post.Question = req.body.Question || post.Question
        post.AssignmentID = req.body.AssignmentID || post.AssignmentID
        post.subDate = Date.now()

        const updatedPost = await assigns.save()
        res.json(updatedPost)

    } catch (error) {
        return res.status(404).json({ message: "Post not found" })
    }
})

//Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const assigns = await AssignModel.findById(req.params.id)
        if (!assigns) {
            return res.status(404).json({ message: "Post not Found" })
        }
        //await Post.deleteOne({ _id: post._id })
        await AssignModel.findByIdAndDelete(req.params.id)
        res.json({ message: "Post Deleted" })
    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "htfdhgfc" });
    }
})

module.exports = router;