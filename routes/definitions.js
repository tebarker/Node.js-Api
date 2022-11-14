const express = require('express');
const router = express.Router();

//get all routes 
router.get('/', (req, res) => {
res.send("Get all routes");
});

module.export = router;