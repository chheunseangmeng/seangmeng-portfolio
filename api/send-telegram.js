export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  const text = `
📥 *New Portfolio Contact* 📥

👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:* 
${message}

📅 *Sent:* ${new Date().toLocaleString()}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text.trim(),
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();

    if (response.ok && data.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: data.description || "Failed to send" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Network error" });
  }
}
