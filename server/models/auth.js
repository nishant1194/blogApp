const mongoose = require('mongoose') ;

authSchema = mongoose.Schema({
    fullName:{
        type:String,
    required:true 
} ,
    password: {
        type: String,
        required :true
    },
    email: {
        type: String,
        required :true
    },
    userType:String
})


module.exports = mongoose.model('auth' , authSchema) ;