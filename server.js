const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connect to MongoDB
mongoose.connect("mongodb://ds123718.mlab.com:23718/heroku_xn610mnt",
    {auth: {
        user: "savila",
        password: "konecto"
    }}
    ).then(() => console.log('Connection Succesfull'));
let db = mongoose.Connection;

//Init App
const app = express();
const port = process.env.PORT || 3000;

//Load Views Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.use(express.static(__dirname+'/public'));

//Meetings route
app.get('/meetings', function(req, res){
    let meetings = [
        {
            id: '0001',
            title: 'Konecto Weekly Check-In Jan28',
            attendees: [
                {
                    id: 'savila',
                    name: 'Sebastian Avila',
                    email: 'savila@konecto.xyz',
                    arrivalTime: '8:00'
                },
                {
                    id: 'bwhite',
                    name: 'Brian white',
                    email: 'bwhite@konecto.xyz',
                    arrivalTime: '8:00'
                }                
            ],
            actionItems: [
                {
                    id: '00001',
                    title: 'Talk to Josue',
                    owner: {
                        id: 'savila',
                        name: 'Sebastian Avila'
                    } ,
                    description: 'Talk to Josue and schedule a new meeting'
                }
            ]},
            {
            id: '0002',
            title: 'Konecto Weekly Check-In Jan30',
            attendees: [
                {
                    id: 'savila',
                    name: 'Sebastian Avila',
                    email: 'savila@konecto.xyz',
                    arrivalTime: '8:00',
                },
                {
                    id: 'bwhite',
                    name: 'Brian white',
                    email: 'bwhite@konecto.xyz',
                    arrivalTime: '8:00',
                }                
            ],
            actionItems: [
                {
                    id: '00002',
                    title: 'Talk to Josue',
                    owner: {
                        id: 'savila',
                        name: 'Sebastian Avila'
                    } ,
                    description: 'Talk to Josue and schedule a new meeting'
                }
            ]

        }];
    res.render('meeting_view',{
        title:'Meetings',
        meetings: meetings 
    });
});

//Start Server
app.listen(port,function(){
    console.log('Server running on port: %d', port);
})