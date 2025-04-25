import express from "express";
import cookieParser from "cookie-parser"; // Import cookie-parser
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

// Enable CORS with credentials for cross-origin requests
app.use(
  cors({
    // frontend url
    origin: "http://localhost:5173",
    // allow cookies to be sent which will have token
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
