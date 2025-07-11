import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        process.env.NODE_ENV === "development" ||
        // Allow requests with no origin (like mobile apps, curl, or same-origin requests)
        !origin ||
        allowedOrigins.includes(origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.get("/ping", (_, res) => {
  res.json({ pong: true });
});

app.listen(PORT, () => {
  console.log(`🚀 API listening on http://127.0.0.1:${PORT}`);
});
