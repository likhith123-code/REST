const mongoose=require('mongoose');

const Dishes=require('./models/dishes');

const url='mongodb://localhost:27017/myData';
const connect=mongoose.connect(url);

connect.then((db)=>{
    var newDish=Dishes({
        name:"Samosa",
        description:"Very Hot and Spicy"
    });

    newDish.save()    //save data and will return a call back and it is used in next line. In that call back dish is returned
    .then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec()  //this will return a call back and that call back is used on then in next line
    })
    .then((dishes)=>{
        console.log(dishes);
        mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
});