const mongoose = require('mongoose') ;

blogSchema = mongoose.Schema({
    tittle:String ,
    description: String,
    imageUrl: String,
    category:String,
    upLoaderName:String,
    upLoaderEmail:String,
},
{ timestamps: true })


module.exports = mongoose.model('Blog' , blogSchema) ;