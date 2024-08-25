const mongoose = require('mongoose') ;

commentSchema = mongoose.Schema({
    commentText:{
        type:String ,
        required: true},
    email:{
        type:String ,
        required: true
    },
    userName:{
        type:String ,
        required: true
    },
    autherName:{
        type:String ,
        required: true
    },
    blogId:{
        type:String ,
        required: true
    }
})


module.exports = mongoose.model('Comment' , commentSchema) ;