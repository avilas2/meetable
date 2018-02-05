const mongoose = require('mongoose');

//User Schema
let itemSchema = mongoose.Schema({
    name: {
        type:String
    },
    type: {
        type: String
    },
    owner: {
        
    }

});