const cron = require('node-cron');

// Schedule the task to run every 2 minutes
cron.schedule('*/2 * * * *', () => {
    console.log('Hello World');
});

console.log('Cron job service started...');
