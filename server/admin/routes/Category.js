const express = require('express') ;
const router = express.Router() ;
const Category = require('../../models/category');
const checkUser = require('../../midleware/checkUser');

// add a category

router.post('/', checkUser , (req , res) =>{
    const newCategory = new Category({
        name:req.body.name,
        imageUrl:req.body.imageUrl
    })

    newCategory.save()
    .then(result =>{
        res.status(201).json({
            new_blog:result 
        })
        
    })
    .catch(err=>{
        console.log("Error is " +err)
        res.status(500).json({
            error: err,
            msg:"name is required" 
        })
    })

})


//get all the catergory
router.get('/',(req,res)=>{
    Category.find()
    .then(result=>{
        res.status(201).json({
            categorys: result 
        })
       

    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

//get a category by id
router.get('/:id' , (req,res)=>{
    Category.find({_id : req.params.id})
    .then(result=>{
        res.status(201).json({
            category:result
    })
    })
    .catch(err=>{
        console.log(err) ;
        res.status(500).json({
            error:err 
    })
    })
})

//delete a category by id
router.delete('/:id',checkUser , (req,res)=>{
    Category.deleteOne({_id : req.params.id})
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

// update a categiry by id
router.put('/:id',checkUser , (req , res)=>{
    Category.updateOne({_id:req.params.id } ,req.body)

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


//count all the categorys
router.get('/get/count' ,(req,res)=>{
    Category.find().countDocuments()
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


//get a catergoy by name
router.get('/category/:name' , (req,res)=>{
    Category.find({category : req.params.name})
    .then(result=>{
        res.status(201).json({
            category:result
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
