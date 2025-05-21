const express = require("express");
const cors = require("cors");
const app = express();

let latestValue = 0;

app.use(cors());
app.use(express.json());

app.post("/upload", (req, res) => {
  const { value } = req.body;
  latestValue = value;
  console.log("📥 센서값 수신:", value);
  res.sendStatus(200);
});

app.get("/latest", (req, res) => {
  res.json({ value: latestValue });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API 서버 실행 중 (포트 ${PORT})`);
});