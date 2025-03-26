const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const examGroupRoutes = require('./routes/exam-group-routes');
app.use('/api', examGroupRoutes); 

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// This is a change made in the main branch to simulate conflicts

