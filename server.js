const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose'); // Assuming you are using mongoose for connection
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require("./routes/imageRoutes")

const app = express();
const port = process.env.PORT || 3500;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: "*",
    },
});

// Assuming you have a separate connection.js file for MongoDB connection
require('./connection');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);

// Define the User model here (assuming it's defined in models/User.js)
// const User = require('./models/User');

server.listen(port, "0.0.0.0", () => {
    console.log('Server running at port', port);
});
