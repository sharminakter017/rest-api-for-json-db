# React App Project 

This is our first rest api app project by Sharmin Sultana

## First clone this repo and then install this packeges

```console
$ npm install 
```

## Server Structure

```js
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');


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


//listen server
app.listen(PORT,(req,res) => {
    console.log(`server is port of ${PORT}`.bgGreen.black);
    
})

```

```html


<div class="container my-5 student-table">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <a class="btn btn-primary" href="/student/create">Add New Student</a>
            <a class="btn btn-danger" href="/student/unverifyed">Unverifyed</a>
        </div>

        <br>
        <br>
     
    <% students.forEach((stu,index) => { %>
           
                <div class="col-md-3">
                    
                    <div class="card">
                        <div class="card-body">
                            <div class="user-info">
                                <% if (stu.photo == '../public/images/avatar.png') { %>
                                    <img src= "<%= stu.photo %>"    alt="">
                                 <% } else { %>
    
                                    <img src= "/public/images/<%= stu.photo %>"    alt="">
    
                                  
                                <% } %>
                                <h2><%= stu.name %></h2>
                                <p><%= stu.cell %></p>
                                <hr>
                                <a class=" btn btn-info" href="/student/<%= stu.id %> ">View</a>

                            </div>
                        </div>
                    </div>
                
                </div>
            
                <% }) %>
 
       
    </div>
</div>

```

## Packeges

* Expres js
* Nodemon
* colors
* dotenv
* multer
* nodemailer