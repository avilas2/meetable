const mongoose = require('mongoose');

//Meeting Schema
let meetingSchema = mongoose.Schema({
    name:{
        type: String,
    },
    type:{
        type: String,
    },
    createdBy:{
        type: Schema.Types.ObjectId, ref: 'User',
    },
    createdOn:{
        type: Date,
        default: Date.now

    },
    startTime:{
        type: Date,
        default: Date.now
    },
    endTime:{
        type: Date,
    },
    attendees:[{
        email:{
            type:String
        },
        arrivalTime:{
            type: Date,
            default: Date.now
        }
    }],
    workgroup:{
        type: Schema.Types.ObjectId, ref: 'Workgroup'
    },
    organization:{
        type: Schema.Types.ObjectId, ref: 'Organization'
    },
    team:[{
        type: Schema.Types.ObjectId, ref: 'Team'
    }],
    project:{
        type: Schema.Types.ObjectId, ref: 'Project'
    },
    description:{
        type: String
    },
    Items:[{}]
});