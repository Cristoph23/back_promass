import express from "express";
import cors from "cors";
import router from "./routes/routs.js";

const app = express();



// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use(router)

export default app