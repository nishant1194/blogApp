const mongoose = require('mongoose') ;

categorySchema = mongoose.Schema({
    
    name:{
        type:String,
        required:true 
    },
    imageUrl: String,
})


module.exports = mongoose.model('Category' , categorySchema) ;