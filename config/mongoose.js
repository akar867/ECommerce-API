const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
//when connecting to database point it to mongodb://127.0.0.1:27017/products
mongoose.connect('mongodb://127.0.0.1:27017/products', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;