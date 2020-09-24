const express= require('express')
const app=express()

const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

const router=require('./router');

app.use('/forecasts/',router);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    const d=new Date();
    res.json({currentTime:d.toTimeString()});
    console.log("GET");
})

app.listen(3000,()=>{
    console.log("Server is listening")
})