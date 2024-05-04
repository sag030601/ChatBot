import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

const app = express();

//Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// remove it in production
// morgain is used to log the req server is getting
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

//Middlewares

export default app;
