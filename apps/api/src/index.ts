import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/ping", (_, res) => {
  res.json({ pong: true });
});

app.listen(PORT, () => {
  console.log(`🚀 API listening on http://127.0.0.1:${PORT}`);
});
