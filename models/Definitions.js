const mongoose = require('mongoose');
//rules for what I'll be keeping in my database for this particular app
const DefinitionSchema = new mongoose.Schema({
content: String, 
author: String 
});

module.exports = mongoose.model('Definition', DefinitionSchema);