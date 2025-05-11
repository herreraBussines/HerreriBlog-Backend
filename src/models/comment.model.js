import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName is required"],
        minlength: [3, "userName must be at least 3 characters"],
        maxlength: [50, "userName must be at most 50 characters"],
        trim: true,
    },
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [10, "content must be at least 10 characters"],
        maxlength: [650, "content must be at most 650 characters"],
        trim: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: [true, "postId is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    }, {
        versionKey: false
});

export default mongoose.model("Comment", commentSchema);