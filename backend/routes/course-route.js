const express = require('express');
const router = express.Router();
const Course = require('../models/course-model');

// Get All Post
router.get('/', async (req, res) => {
    try {
        const course = await Course.find();
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// Create a new post
router.post('/', async (req, res) => {
    const course = new Course({
        category: req.body.category,
        title: req.body.title,
        image: req.body.image,
        review: req.body.review,
        enrolled: req.body.enrolled,
        lessons: req.body.lessons,
        time: req.body.time,
        teacher: req.body.teacher,
        cost: req.body.cost,
    });

    try {
        await course.save();
        res.status(201).json(course);
        console.log(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//update an existing post
router.put('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Post not found" });
        }

        course.title = req.body.title || course.title;
        course.enrolled = req.body.enrolled || course.enrolled;
        course.category = req.body.category || course.category;
        course.review = req.body.review || course.review;
        course.image = req.body.image || course.image;
        course.lessons = req.body.lessons || course.lessons;
        course.time = req.body.time || course.time;
        course.teacher = req.body.teacher || course.teacher;
        course.cost = req.body.cost || course.cost;


        const updatedCourse = await course.save(course);
        res.json(updatedCourse);
        console.log(course)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Post not found" });
        }

        // await Course.deleteOne({_id:post._id })
        await Course.findByIdAndDelete(req.params.id)
        res.json({ message: "Course deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Fetch posts by category ID
// router.get('/category/:categoryId', async (req, res) => {
//     try {
//         const categoryId = req.params.categoryId;

//         // Validate Category ID
//         const categoryExists = await Category.findById(categoryId);
//         if (!categoryExists) {
//             res.status(400).json({ message: 'Invalid Category ID' })
//         }

//         // Fetch posts
//         const course = await Course.find({ category: categoryId }).populate('category');
//         res.status(200).json(course)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

module.exports = router;