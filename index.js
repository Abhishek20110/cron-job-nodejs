const express = require('express');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

// Route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the back end');
});

// Schedule the task to run every 2 minutes
cron.schedule('*/2 * * * *', () => {
    console.log('Hello World');
});

console.log('Cron job service started...');

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
