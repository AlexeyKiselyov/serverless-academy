import TelegramBot from 'node-telegram-bot-api';

import { optionsCity, optionsInterval } from './helpers/buttonsOptions.js';
import { getForecast } from './helpers/getForecast.js';

const TG_BOT_TOKEN = '';

const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

bot.setMyCommands([
  { command: '/start', description: 'Welcome to the forecast bot!👋' },
]);

bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const clientName = msg.from.first_name;

  try {
    if (text === '/start') {
      return await bot.sendMessage(
        chatId,
        `Welcome to the forecast bot, ${clientName}!👋`,
        optionsCity
      );
    }

    return bot.sendMessage(chatId, "I don't understand you!)");
  } catch (error) {
    console.log(error.message);
    bot.sendMessage(chatId, `Some error: ${error.message}`);
  }
});

bot.on('callback_query', async msg => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  try {
    if (data === '/forecastInBakhmut') {
      return await bot.sendMessage(
        chatId,
        `Select an interval ⏱️`,
        optionsInterval
      );
    }

    if (data === '3') {
      const textToSend = await getForecast(data);
      await bot.sendMessage(chatId, textToSend, optionsInterval);
    }
    if (data === '6') {
      const textToSend = await getForecast(data);
      await bot.sendMessage(chatId, textToSend, optionsInterval);
    }
  } catch (error) {
    console.log(error.message);
    return bot.sendMessage(chatId, `Some error: ${error.message}`);
  }
});
