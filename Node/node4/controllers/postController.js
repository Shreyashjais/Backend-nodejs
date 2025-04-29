const Post = require("../models/postModel")

exports.createPost = async(req,res)=>{
    try{
         const {title,body} =req.body;
         const newPost= new Post({
            title,body
         })
         const savedPost = await newPost.save();
         res.json({
           savedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating post"
        })
    }
}

exports.getAllPosts = async (req,res)=>{
    try{
        const posts= await Post.find().populate("comments").populate("likes").exec();
        res.json({
            posts,
        })

    }
    catch(error){
        return res.status(500).json({
            error:"Error while fetching post"
        })

    }
}