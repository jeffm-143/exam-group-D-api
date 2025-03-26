
const express = require('express');
const app = express();

app.get('/exam-group', (req, res) => {
    res.json({ message: 'Group D API' });
});



// Define the GET /exams endpoint
app.get('/exams', (req, res) => {
    const exams = [
        { id: 1, name: 'Jeff Monreal' },
        { id: 2, name: 'Alexus Sagaral' },
        { id: 3, name: 'Mark Dave Catubig' },
        { id: 4, name: 'Natasha Dinopol' }
    ];
    res.json(exams);
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
