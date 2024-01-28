const express = require("express");

const ChatGPTAPIClient = require("../src/client/chatGPTAPIClient");
require("dotenv").config();

// sample Chat GPT API request
const apiKey = process.env.API_KEY;
const chatGPTClient = new ChatGPTAPIClient(apiKey);

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/email", (req, res) => {
  console.log("client request : :: ", req.body);
  const message = {
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content:
          "You are an email auto-completion bot.  Help complete the the email with a short 1 or 2 paragraph suggestion.  use markdown",
      },
      {
        role: "user",
        content: req.body.message,
      },
    ],
  };

  // const req = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer YOUR_OPENAI_API_KEY`
  //   },
  //   body: JSON.stringify({
  //     prompt: req.message, // the text of the email
  //     max_tokens: 150
  //   })

  chatGPTClient
    .sendChatMessage(message)
    .then((response) => {
      console.log(response);
      res.json({ response });
    })
    .catch((error) => res.status(500).json({ Error: error.message }));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
