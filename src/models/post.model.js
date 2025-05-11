import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [5, "title must be at least 5 characters"],
        maxlength: [150, "title must be at most 150 characters"],
        trim: true,   
    },
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [10, "content must be at least 10 characters"],
        maxlength: [5000, "content must be at most 5000 characters"],
        trim: true,
    },
    course: {
        type: String,
        required: [true, "The course is required to create a post"],
        enum: ["Taller", "Tecnologia","Practica Supervisada"],
        message: "The course must be Taller, Tecnologia or Practica Supervisada"
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
    }, {
        versionKey: false,
});

export default mongoose.model("Post", postSchema);