import axios from 'axios';

import { MONO_API_URL } from './constants.js';
import { getDate } from './getDate.js';

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

    return `${dateAndTime} => Покупка: ${rateBuy}грн. => Продаж: ${rateSell}`;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

// Need to Add cash 'Request failed with status code 429'
