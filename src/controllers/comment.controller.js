import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const createComment = async (req, res) => {
    try {
        const {postId, userName, content} = req.body;
        if (!postId || !userName || !content) {
            return res.status(400).json({
                message: "postId, userName and content are required"
            });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }
        const newComment = new Comment({ postId, userName, content });
        await newComment.save();
        await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });
        res.status(201).json(newComment);
} catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({
            message: "Error creating comment",
            error: error.message
        });
    }
}

export const getComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error retrieving comments:", error);
        res.status(500).json({
            message: "Error retrieving comments",
            error: error.message
        });
    }
}