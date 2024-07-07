const express = require('express') ;
const router = express.Router() ;
const Blog = require('../../models/blog') ;
const checkUser = require('../../midleware/checkUser')
const checkAdmin = require('../../midleware/checkAdmin')


// add a blog
router.post('/' ,checkUser, (req , res) =>{
    const newBlog = new Blog({
        tittle :req.body.tittle ,
        description: req.body.description ,
        imageUrl:req.body.imageUrl,
        category:req.body.category
    })

    newBlog.save()
    .then(result =>{
        res.status(201).json({
            new_blog:result 
        })
      
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    })

})


//get all the blogsss
router.get('/' ,(req,res)=>{
    Blog.find()
    .then(result=>{
        res.status(201).json({
            blogs: result 
        })

    })
})

//get a blog by id
router.get('/:id' , (req,res)=>{
    Blog.find({_id : req.params.id})
    .then(result=>{
        res.status(201).json({
            blog:result
    })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

//delete a bog by id
router.delete('/:id' , (req,res)=>{
    Blog.deleteOne({_id : req.params.id})
    .then(result=>{
        res.status(201).json({
            deletedData:result
    })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

// update a blog by id
router.put('/:id' , (req , res)=>{
    Blog.updateOne({_id:req.params.id } ,req.body)

    .then(result=>{
        res.status(201).json({
            upadatedData:result 
        })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error: err
        })
    })
})

//get a blog by catergoy
router.get('/category/:category' , (req,res)=>{
    Blog.find({category : req.params.category})
    .then(result=>{
        res.status(201).json({
            blog:result
    })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

//count all the blogs
router.get('/get/count' ,(req,res)=>{
    Blog.find().countDocuments()
    .then(result=>{
        res.status(201).json({
            total: result 
        })

    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

module.exports = router ;
