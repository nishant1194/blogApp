const mongoose = require('mongoose') ;

blogSchema = mongoose.Schema({
    tittle:String ,
    description: String,
    imageUrl: String,
    category:String,
})


module.exports = mongoose.model('Blog' , blogSchema) ;