import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import envConfig from "./config/env.config.js";
import registerRoutes from "./modules/index.js";
import redisConfig from "./config/redis.config.js";
import dbConfig from "./config/database.config.js";

const app = express();
const backendPort = Number(envConfig.get("PORT"));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const startServer = async () => {
  await dbConfig.connect();

  if (dbConfig.isConnected()) {
    registerRoutes(app);
    await redisConfig.connect();
    app.listen(backendPort, "0.0.0.0", () => {
      console.log(`Server running on port ${backendPort}`);
    });
  } else {
    console.error("Server error: Could not connect to the database.");
    process.exit(1);
  }
};

startServer();
