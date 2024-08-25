const express = require('express') ;
const router = express.Router() ;
const Comment = require('../../models/comment') ;
const checkUser = require('../../midleware/checkUser')

// add a comment
router.post('/' , (req , res) =>{
    const newComment = new Comment({
        commentText: req.body.commentText ,
        email:req.body.email ,
        userName:req.body.userName ,
        blogId:req.body.blogId,
        autherName:req.body.autherName
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


//delete a blog by id
router.delete('/auther/:id' , (req,res)=>{
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

//get comments by id

router.get('/:blogiId' ,(req,res)=>{
    Comment.find({blogId:req.params.blogiId})
    .then(result=>{
        res.status(201).json({
            comments: result 
        })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})


//get comments by userId

router.get('/user/:userId' ,(req,res)=>{
    Comment.find({userName : req.params.userId})
    .then(result=>{
        res.status(201).json({
            comments: result 
        })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

// get comments by autherName

router.get('/auther/:autherId' ,(req,res)=>{
    Comment.find({autherName:req.params.autherId})
    .then(result=>{
        res.status(201).json({
            comments: result 
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
