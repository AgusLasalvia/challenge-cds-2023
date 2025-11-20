import express, { type Application } from "express";
import mongoose from "mongoose";

import { DATABASE, SERVER } from "./config/globalVariables.js";

// import routes
import userRoutes from "./routes/user.routes.js";
import movieRoutes from "./routes/movie.routes.js";

// Load environment variables from .env file

const app: Application = express();

// Connect to MongoDB
mongoose
  .connect(DATABASE.URL as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

// Start the server
app.listen(SERVER.PORT, () => {
  console.log(`Server is running on port ${SERVER.PORT}`);
});
