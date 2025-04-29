const express= require("express")
const router = express.Router();
const {createComment}= require("../controllers/commentController.js")
const {createPost, getAllPosts}= require("../controllers/postController.js")
const {likePost, unlikePost} = require("../controllers/likeController.js")

router.post("/create-comment",createComment)
router.post("/create-post",createPost)
router.get("/getAllPosts", getAllPosts)
router.post("/likePost",likePost )
router.post("/unlikePost", unlikePost)


module.exports= router;