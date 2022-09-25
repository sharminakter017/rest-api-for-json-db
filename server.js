const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const userRoute = require('./routes/users')


//express init
const app = express()

//environemnt setup
dotenv.config();
const PORT = process.env.PORT || 5000;

//static 
app.use('/public',express.static('public'));

//data manage
app.use(express.json())
app.use(express.urlencoded({extended : false}));

//api routes
app.use('/api/v1/user', userRoute)



//listen server
app.listen(PORT,(req,res) => {
    console.log(`server is port of ${PORT}`.bgGreen.black);
    
})
