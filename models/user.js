const mongoose = require('mongoose');

//User Schema
let userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    emailName:{type:String},
    organization:{
        type: Schema.Types.ObjectId, ref: 'Organization'
    },
    workgroup:[
        {
            type: Schema.Types.ObjectId, ref: 'Workgroup'
        }
    ],
    team:[
        {
            type: Schema.Types.ObjectId, ref: 'Team'
        }
    ],
    project:[
        {
            type: Schema.Types.ObjectId, ref: 'Project'
        }
    ],
    items:[
        {
            type: Schema.Types.ObjectId, ref: 'Item'
        }
    ]

});