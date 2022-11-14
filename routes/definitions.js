const express = require('express');
const router = express.Router();
const Definition = require('../models/Definitions');

//get all routes 
router.get('/', (req, res) => {
res.send("Get all routes");
});

//Create a new definition 
router.post('/new', (req, res) => {
    res.json(req.body);
});

module.exports = router;