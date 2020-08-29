const mongoose=require('mongoose');

const Dishes=require('./models/dishes');

const url='mongodb://localhost:27017/myData';
const connect=mongoose.connect(url);

connect.then((db)=>{
    Dishes.create({
        name:"MagoBite",
        description:"Orange Candy"
    }) //create will save and return a dish so they can be accessed using the .then
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated Candy'}
        },{ 
            new: true 
        })
        .exec();  
        //when we find the id and update it 
        //it will return the dish and for that dish we are updating the comments
    })
    .then((dish) => {
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a Yummy feeling!',
            author: 'Nestle'
        });

        return dish.save();
    })
    .then((dish) => {
        console.log(dish);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});