const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * Get All the post
 */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message:err });
    }
});

/**
 * Create a post
 */
router.post('/', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({message: error});
    } 
});

/**
 * Get a post
 */
router.get('/:postId', async (req, res) => {
    console.log(req.params.postId);
    let PostId = req.params.postId;
    try {
        const post = await Post.findById(PostId);
        res.json(post);
    }catch (error) {
        res.json({message: error});
    }
});

/**
 * Delete a post
 */
 router.delete('/:postId', async (req, res) => {
    let postId = req.params.postId;
    try {
        // const msg = await Post.findByIdAndDelete(postId);
        const removedPost = await Post.remove({_id: postId});
        res.json(removedPost);
    } catch (error) {
        res.json({ message:error });
    }
 });
 
/** update a post */
router.patch('/:postId', async (req, res) => {
    let postId = req.params.postId;
    try {
        const updatePost = await Post.updateOne({_id: postId}, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updatePost);
    } catch (error) {
        res.json({ message:error });
    }
});
module.exports = router;