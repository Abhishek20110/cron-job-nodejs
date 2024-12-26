const express = require('express');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

// Variable to store the latest cron job response
let cronResponse = '';

// Route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the back end');
});

// Route to get the latest cron response
app.get('/cron-response', (req, res) => {
    res.send(cronResponse || 'No cron response yet');
});

// Schedule the task to run every 2 minutes
cron.schedule('*/2 * * * *', () => {
    cronResponse = 'This is a cron response';
    console.log('Hello World');
    console.log(cronResponse);
});

console.log('Cron job service started...');

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
