import axios from 'axios';
import NodeCache from 'node-cache';

import { MONO_API_URL } from './constants.js';
import { getDate } from './getDate.js';

const myCache = new NodeCache();

export const getRate = async currency => {
  const uahCode = 980;
  const currencyCode = currency === 'USD' ? 840 : 978;

  try {
    const rateData = await axios(MONO_API_URL);

    const { date, rateBuy, rateSell } = rateData.data.find(
      item =>
        item.currencyCodeA === currencyCode && item.currencyCodeB === uahCode
    );

    const dateAndTime = getDate(date);

    const textToSend = `${dateAndTime} => Покупка: ${rateBuy}грн. => Продаж: ${rateSell}`;

    const successCache = myCache.set(currency, textToSend);

    if (!successCache) {
      console.log('Не вдалося зберегти дані курсу в кеші!');
    }

    return textToSend;
  } catch (error) {
    if (error.response.status === 429 && myCache.get(currency)) {
      return myCache.get(currency);
    } else if (error.response.status === 429) {
      console.log(error.message);
      return 'Вибачте за незручності. Спробуйте повторити трохи пізніше...';
    }

    console.log(error.message);

    return error.message;
  }
};
