const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/api/chat", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: req.body.history,
  });
  const msg = req.body.message;
  const result = await chat.sendMessage(msg);
  const ans = await result.response;
  const text = ans.text();
  res.send(text);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
