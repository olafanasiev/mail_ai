const ChatGPTAPIClient = require("../src/client/chatGPTAPIClient");
require("dotenv").config();

// sample Chat GPT API request
const apiKey = process.env.API_KEY;
const chatGPTClient = new ChatGPTAPIClient(apiKey);

const messages = [
  { role: "user", content: "Dummy Content for User." },
  {
    role: "assistant",
    content: "Dummy content for assistant!",
  },
  { role: "user", content: "Dummy content for user 2." },
];

chatGPTClient
  .sendChatMessage(messages)
  .then((response) => console.log("ChatGPT Response:", response))
  .catch((error) => console.error("Error:", error));
