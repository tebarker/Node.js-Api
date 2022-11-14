const express = require('express'); //require function allows you to pull from dependencies and store them in variables
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//start express app
const app = express(); 

//connect to database
mongoose.connect('mongodb://localhost/definitions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
console.log("Connected to MongoDB!")
});

//middleware
app.use(bodyParser.json());

//ROUTES 
//a get request that brings up the homepage of the app
app.get('/', (req, res) => {res.send("Node JS REST API Definitions");});

const DefinitionsRoute = require('./routes/Definitions');
//Setting up new route "DefinitionsRoute"
app.use('/definitions', DefinitionsRoute);

// start server 
app.listen(3000, console.log("Listening from port 3000"));