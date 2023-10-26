import TelegramBot from 'node-telegram-bot-api';

import { TG_BOT_TOKEN } from './helpers/constants.js';
import { getForecast } from './helpers/getForecast.js';
import {
  optionsStart,
  optionsWeatherMenu,
  optionsRateMenu,
} from './helpers/buttonsOptions.js';
import { getRate } from './helpers/getRate.js';

const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

bot.setMyCommands([
  { command: '/start', description: 'Вітаю у нашому боті!👋' },
]);

bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const clientName = msg.from.first_name;

  try {
    if (text === '/start') {
      return await bot.sendMessage(
        chatId,
        `Вітаю, ${clientName}!👋`,
        optionsStart
      );
    }
    if (text === '/Погода 🌡️') {
      return await bot.sendMessage(
        chatId,
        `Погода у м.Бахмут 🌥️`,
        optionsWeatherMenu
      );
    }

    if (text === '/Курс валют 💹') {
      return await bot.sendMessage(chatId, `Курс валют 💹`, optionsRateMenu);
    }

    if (text === 'Кожні 3 години 🕒') {
      const textToSend = await getForecast(text);
      return await bot.sendMessage(chatId, textToSend, optionsWeatherMenu);
    }

    if (text === 'Кожні 6 годин 🕕') {
      const textToSend = await getForecast(text);
      return await bot.sendMessage(chatId, textToSend, optionsWeatherMenu);
    }

    if (text === 'Вітер 💨') {
      const textToSend = await getForecast(text);
      return await bot.sendMessage(chatId, textToSend, optionsWeatherMenu);
    }

    if (text === 'Попереднє меню ⬅️') {
      return await bot.sendMessage(chatId, 'Головне меню 🏠', optionsStart);
    }

    if (text === 'USD') {
      const textToSend = await getRate(text);
      return await bot.sendMessage(chatId, textToSend, optionsRateMenu);
    }

    if (text === 'EUR') {
      const textToSend = await getRate(text);
      return await bot.sendMessage(chatId, textToSend, optionsRateMenu);
    }
  } catch (error) {
    console.log(error.message);
    return bot.sendMessage(chatId, `Some error: ${error.message}`);
  }

  return bot.sendMessage(chatId, 'Я тебе не розумію!)');
});
