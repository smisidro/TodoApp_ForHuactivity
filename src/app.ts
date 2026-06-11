import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";

import router from "./routes";
import { isDev } from "./config";

const app = express();

// Trust proxy (important for rate limit + deployments)
app.set("trust proxy", 1);

// CORS setup
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Parse JSON body
app.use(express.json());

// Security headers
app.use(helmet());
app.disable("x-powered-by");

// Rate limiter (disable in development if you want)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

if (!isDev) {
  app.use(limiter);
}

// Base API routes
app.use("/api", router);

export default app;