const express = require('express') ;
const router = express.Router() ;
const Comment = require('../../models/comment') ;
const checkUser = require('../../midleware/checkUser')

// add a comment
router.post('/' , (req , res) =>{
    const newComment = new Comment({
        commentText: req.body.commentText ,
        email:req.body.email ,
        blogId:req.body.blogId
    })

    newComment.save()
    .then(result =>{
        res.status(201).json({
            new_comment:result 
        })
      
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    })

})


//get all the comments
router.get('/' ,(req,res)=>{
    Comment.find()
    .then(result=>{
        res.status(201).json({
            comments: result 
        })

    })
})


//delete a bog by id
router.delete('/:id' , (req,res)=>{
    Comment.deleteOne({_id : req.params.id})
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

//count all the comments
router.get('/get/count/:blogiId' ,(req,res)=>{
    Comment.find({blogId:req.params.blogiId}).countDocuments()
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
