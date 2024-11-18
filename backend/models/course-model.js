const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const courseSchema = new mongoose.Schema({

    category: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String },
    review: { type: Number, required: true },
    enrolled: { type: Number },
    lessons: { type: Number, required: true },
    time: { type: String, required: true },
    teacher: { type: String },
    cost: { type: String },

})
const CourseModel = mongoose.model('Course', courseSchema)
module.exports = CourseModel
