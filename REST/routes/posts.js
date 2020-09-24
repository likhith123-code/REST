const express= require('express');

const Post = express.Router();
const PostDb = require('../models/PostModel');

Post.get('/',(req,res)=>{
    res.send("Welcome to posts Router")
});

Post.post('/',(req,res)=>{
    const p =new PostDb({
        title:req.body.title,
        description:req.body.description
    })
    p.save()
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>console.log(err))
})

module.exports = Post;