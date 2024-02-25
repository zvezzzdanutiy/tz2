const axios = require('axios');

// Функция для отправки сообщения в Telegram бот
const sendMessage = async (chatId, message) => {
  const telegramToken = '7122476551:AAGRldhloWEs-_jWsEkOTMZEsXhGE0dbXWQ';
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  try {
    await axios.post(url, { chat_id: chatId, text: message });
  } catch (error) {
    console.error('Ошибка отправки сообщения в Telegram:', error);
  }
};

module.exports = { sendMessage };
