import { Router } from "express";
import { createPost, deletePost, listAllPosts, updatePost, viewPost } from "../controllers/posts.controllers.js";


const router = Router()


router.get('/posts/listAllPosts', listAllPosts)
router.get('/posts/viewPost/:id', viewPost)
router.post('/posts/createPost', createPost)
router.put('/posts/updatePost/:id', updatePost)
router.delete('/posts/deletePost/:id', deletePost)


export default router