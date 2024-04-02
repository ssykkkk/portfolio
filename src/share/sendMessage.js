import axios from 'axios';

const TELEGRAM_BOT_TOKEN = '6942658718:AAHPCDnsHzmM6FFy-DDlQnEBA0kRtCQrug4';

export const sendMessageToTelegram = async (text) => {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: "-1002016686637",
      text: text,
    });

    console.log(response.data);
  } catch (error) {
    console.error('Помилка відправки повідомлення в Telegram:', error);
  }
};
