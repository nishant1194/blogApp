const express = require('express') ;
const app = express() ;
const cors = require('cors')
const mongoose = require('mongoose') ;
const bodyPareser = require('body-parser');
const {urlencoded, json} = require('body-parser') ;
const blogRoute = require('./admin/routes/BlogPost');
const categoryRoute = require('./admin/routes/Category') ;
const authRoute = require('./admin/routes/Auth') ;
const commentRoute = require('./admin/routes/Comment') ;

app.use(cors({
    origin : ["https://blog-app-neew.vercel.app"],
    methods : ["GET" , "POST" , "PUT" , "DELETE" ],
    credentials: true
    ));
app.use(bodyPareser.urlencoded({extended:false})) ;
app.use(bodyPareser.json()) ;

async function connectToDatabase() {
    try {
      console.log(' to the database');

      await mongoose.connect('mongodb+srv://nishantkumar32435:bhuvan1@blogapp.ksxhqes.mongodb.net/');
      console.log('Connected to the database');
    } catch (err) {
      console.error('Database connection failed', err);
    }
  }
  
  connectToDatabase();

app.use('/blog' , blogRoute) ;
app.use('/category' , categoryRoute) ;
app.use('/auth' , authRoute) ;
app.use('/comment' , commentRoute) ;



app.use((req,res)=>{
    res.json({
        msg:"ok"
    })
})




module.exports = app ;
