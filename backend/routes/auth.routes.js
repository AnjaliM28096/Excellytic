import express from "express";
const router = express.Router();
import { register, login, logout, user } from "../controllers/auth.controller.js";

// Sign Up route
router.post("/register", register);

// Login route
router.post("/login", login);

router.get("/user", user)

// Logout route
router.post("/logout", logout);

export default router; // Use default export
