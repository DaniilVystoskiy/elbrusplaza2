// Initialization database
const mongoose = require('mongoose');

const { Room } = require('./models');

// Replace mongoose default Promise library (mpromise) with Bluebird
mongoose.Promise = require('bluebird');

// Connect to MongoDB
mongoose.connect("mongodb://localhost/elbrusplaza",{
    server:{
        poolSize: 10 // connections limit in pool
    }
});

// Error handler
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error: ${err}`);
    process.exit(2);
});

// Connection handler
mongoose.connection.on('connected', () => {
    console.info("Succesfully connected to MongoDB Database");
    Room.initRoom(Room);
});