const axios = require("axios");

class ChatGPTAPIClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiEndpoint = "https://api.openai.com/v1/chat/completions";
  }

  async sendChatMessage(message) {
    try {
      const response = await axios.post(this.apiEndpoint, message, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("ChatGPT API Request Error:", error.message);
      throw new Error("ChatGPT API Request Failed");
    }
  }
}

module.exports = ChatGPTAPIClient;
