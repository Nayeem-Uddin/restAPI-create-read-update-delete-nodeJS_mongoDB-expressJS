                                                                        

const express = require('express')
const { updateOne } = require('../models/Post')
const router = express.Router()
const Post = require('../models/Post')


///router that handle getting our data from database
router.get('/',async (req,res)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({message:'an error occured during the finding data time'})
    }
})

//router that handles create posts operation using async , await function
router.post('/',async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (error) {
        res.json({message:'an error occured during insertion time'})
    }
    
})

//routes that handle create operation
// router.post('/',(req,res)=>{
//     // console.log(req.body)
//     const post = new Post({
//         title:req.body.title,
//         description:req.body.description
//     })
//     post.save()
//     .then(data=>{
//         res.json(data)
//     })
//     .catch((err)=>{
//         res.json({message:err})
//     })
// })


//routes that handle to getting specific post
router.get('/:id',async (req,res)=>{
    try {
        const post =await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        res.json({message:'an error occured during finding the specific post'})
    }  
})


//router that handle to do delete operation
router.delete('/:id',async (req,res)=>{
    try {
        const deletedPost = await Post.remove({_id: req.params.id})
        res.json(deletedPost)
    } catch (error) {
        res.json({message:'an error occured during the deletion time'})
    }
})
//router that handle update operation
router.patch('/:id',async (req,res)=>{
    try {
        const updatedpost = await Post.updateOne({_id:req.params.id},
            {$set:
                {title:req.body.title}
            })
            res.json(updatedpost)
    } catch (error) {
        res.json({message:"an error occured during the updating time"})
    }
    
})

module.exports = router