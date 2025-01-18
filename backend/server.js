const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const courseRoutes = require('./routes/course-route')
const assignRoutes = require('./routes/assign-route')
const notesRoutes = require('./routes/notes-route')
const registerRoutes = require('./routes/register-route')

const cors = require('cors');

// require('dotenv').config();


const app = express();
const PORT = 8001;

//Middleware
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());


//connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/assign')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('DB error', err))

//Use Routes
app.use('/api/assigns', assignRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/register', registerRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))







/*{
    "Aname":"create",
    "Question":"Create todo list using Html,CSS,Javascript",
    "AssignmentID":"005",
    "subDate":"2024-08"
    }
    {
"Aname":"Mango",
"Question":"Create Stopwatch using Html,CSS,Javascript",
"AssignmentID":"001",
"subDate":"2024-08"
}
    */

