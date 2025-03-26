
const express = require('express');
const app = express();

app.get('/exam-group', (req, res) => {
    res.json({ message: 'Group D API' });
});



// Define the GET /exams endpoint
app.get('/exams', (req, res) => {
    const exams = [
        { id: 1, name: 'Math Exam' },
        { id: 2, name: 'Science Exam' },
        { id: 3, name: 'History Exam' }
    ];
    res.json(exams);
});



app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
