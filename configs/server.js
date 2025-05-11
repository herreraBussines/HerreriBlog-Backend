import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./mongo.js";
import postRoutes from "../src/routes/post.routes.js";
import commentRoutes from "../src/routes/comment.routes.js";
import { errorHandler } from "../src/middlewares/errorHandler.js";
import { setupSwagger } from "./swagger.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.use(errorHandler);

setupSwagger(app);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
    console.log(" Swagger UI available at http://localhost:" + PORT + "/api-docs");
});