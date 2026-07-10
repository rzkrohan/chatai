import axios from "axios";

function generateConversationId() {
  return (
    Date.now().toString(16) +
    "-" +
    Math.random().toString(16).slice(2, 10)
  );
}

export async function deepseek(message) {
  const conversation_id = generateConversationId();

  const { data } = await axios.post(
    "https://notegpt.io/api/v2/chat/stream",
    {
      message,
      language: "auto",
      model: "deepseek-chat",
      tone: "default",
      length: "moderate",
      conversation_id,
      image_urls: [],
      chat_mode: "standard",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "stream",
    }
  );

  return new Promise((resolve, reject) => {
    let result = "";

    data.on("data", (chunk) => {
      const lines = chunk.toString().split("\n");

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;

        const text = line.slice(6).trim();
        if (!text) continue;

        try {
          const json = JSON.parse(text);

          if (json.text) result += json.text;

          if (json.done) {
            resolve(result.trim());
            data.destroy();
          }
        } catch {}
      }
    });

    data.on("error", reject);
    data.on("end", () => resolve(result.trim()));
  });
}
