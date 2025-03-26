const express = require('express');
const router = express.Router();

// Array to store exams (shared across routes)
let exams = [
    { id: 1, name: 'Jeff Monreal' },
    { id: 2, name: 'Alexus Sagaral' },
    { id: 3, name: 'Mark Dave Catubig' },
    { id: 4, name: 'Natasha Dinopol' }
];

// Define the GET /exam-group route
router.get('/exam-group', (req, res) => {
    res.json({ message: 'Group D API' });
});

// Define the GET /exams endpoint
router.get('/exams', (req, res) => {
    res.json(exams);
});


// Define the POST /exams endpoint
router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json(newExam);
});

module.exports = router;
