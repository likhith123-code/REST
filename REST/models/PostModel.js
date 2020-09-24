const mongoose=require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

// data name and scheme to be used
module.exports = mongoose.model("Posts",PostSchema);