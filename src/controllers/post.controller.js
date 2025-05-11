import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, content, course } = req.body;

        const newPost = new Post({ title, content, course});

        await newPost.save();

        res.status(201).json({
            message: "Post created successfully",
            post: newPost
        });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({
            message: "Error creating post",
            error: error.message
        });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1});
        res.status(200).json({
            message: "Posts retrieved successfully",
            posts
            });
    } catch (error) {
        console.error("Error retrieving posts:", error);
        res.status(500).json({
            message: "Error retrieving posts",
            error: error.message
        });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id).populate("comments");

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post retrieved successfully",
            post
        });
    } catch (error) {
        console.error("Error retrieving post:", error);
        res.status(500).json({
            message: "Error retrieving post",
            error: error.message
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully",
            post
        });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({
            message: "Error deleting post",
            error: error.message
        });
    }
};