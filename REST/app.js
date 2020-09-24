const express=require('express');
const mongoose=require('mongoose');

const app=express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PostRouter = require('./routes/posts');


// by default posts : then we can add additonal routing to it in posts.js
app.use('/posts',PostRouter);

app.get('/',(req,res)=>{
    res.send("Hello welcome to home page")
})

mongoose.connect("https://localhost:27017/",{ useNewUrlParser: true },()=>{
    console.log("DataBase Connected Succesfully");
})
app.listen(3000);