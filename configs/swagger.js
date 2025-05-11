import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HerreriBlog API",
      version: "1.0.0",
      description: "API documentation for the HerreriBlog application",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        Post: {
          type: "object",
          required: ["title", "content", "course"],
          properties: {
            _id: {
              type: "string",
              example: "23f5c6e7d8e9f0a1b2c3d4e5f",
            },
            title: {
              type: "string",
              example: "My first post",
            },
            content: {
              type: "string",
              example: "Example content for the post",
            },
            course: {
              type: "string",
              enum: ["Taller", "Tecnologia", "Practica Supervisada"],
              example: "Tecnologia",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2024-05-01T12:00:00.000Z",
            },
          },
        },
        Comment: {
          type: "object",
          required: ["postId", "userName", "content"],
          properties: {
            _id: {
              type: "string",
              example: "6631a3b5f5d2b8a9d0e7c4b3",
            },
            postId: {
              type: "string",
              example: "23f5c6e7d8e9f0a1b2c3d4e5f",
            },
            userName: {
              type: "string",
              example: "John Doe",
            },
            content: {
              type: "string",
              example: "Great post!",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2024-05-01T12:05:00.000Z",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(
    `Swagger UI available at http://localhost:${process.env.PORT || 3000}/api-docs`
  );
};