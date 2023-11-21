require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.5buqkdv.mongodb.net/ShopSavvy?retryWrites=true&w=majority`;

mongoose.connect(connectionStr) 
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


    mongoose.connection.on('error', err => {
        console.log(err)
    })