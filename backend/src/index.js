const express = require("express");

const ChatGPTAPIClient = require("../src/client/chatGPTAPIClient");
require("dotenv").config();

// sample Chat GPT API request
const apiKey = process.env.API_KEY;
const chatGPTClient = new ChatGPTAPIClient(apiKey);

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/email", (req, res) => {
  const messages = req.body.messages;

  // [
  //   { role: "user", content: "Dummy Content for User." },
  //   {
  //     role: "assistant",
  //     content: "Dummy content for assistant!",
  //   },
  //   { role: "user", content: "Dummy content for user 2." },
  // ];

  chatGPTClient
    .sendChatMessage(messages)
    .then((response) => res.json({ response }))
    .catch((error) => res.status(500).json({ Error: error.message }));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
