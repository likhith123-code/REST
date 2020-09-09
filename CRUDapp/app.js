const express= require('express')
const mongoose=require('mongoose')
const url = 'mongodb://localhost/CRUD'
const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open',()=>{
    console.log("Connected Successfully")
})