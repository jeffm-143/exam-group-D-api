
const express = require('express');
const app = express();

app.get('/exam-group', (req, res) => {
    res.json({ message: 'Group D API' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
