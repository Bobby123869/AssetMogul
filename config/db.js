const mongoose = require('mongoose')
require('dotenv').config()
   const dns = require("dns");
   dns.setServers(["8.8.8.8", "1.1.1.1"]);
const link = process.env.url

const {deleteOldTransactions,deleteAllTransactions} = require('../controllers/transation')
mongoose.connect(link)
    .then(() => {
        console.log('Connected to MongoDB successfully');

        // Run deleteOldTransactions every day
        // setInterval(deleteOldTransactions,deleteAllTransactions, 24 * 60 * 60 * 1000); // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });