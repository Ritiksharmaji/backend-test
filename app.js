const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
require('dotenv').config();
const { readdirSync } = require('fs');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());  // Allows all domains to access the API

// Test Route
app.get('/', (req, res) => {
    res.send("hello Ritik bhai how are you !!!");
});

// Configure Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

// Start the Server with MongoDB Connection
const server = () => {
    db();  // Initialize the MongoDB connection
    app.listen(PORT, () => {
        console.log("Listening on port:", PORT);
    });
};

server();
