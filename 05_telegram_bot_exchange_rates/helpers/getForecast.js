import axios from 'axios';

import { API_URL } from './constants.js';
import { getDate } from './getDate.js';

export const getForecast = async query => {
  try {
    const forecast = await axios(API_URL);

    const filteredForecast =
      query === '3'
        ? forecast.data.list
        : forecast.data.list.filter((_, ind) => ind % 2 === 0);

    const textToSend = filteredForecast
      .map(item => {
        const {
          dt,
          main: { temp },
          weather: [{ main }],
          wind: { speed, deg, gust },
        } = item;

        const dateAndTime = getDate(dt);
        const result =
          query === 'Вітер 💨'
            ? `${dateAndTime} => Шв.: ${speed}м/с => Напр.: ${deg}° => Порив: ${gust}м/с `
            : `${dateAndTime} => Темп.: ${temp}°C => ${main} => Вітер: ${speed}м/с`;

        return result;
      })
      .join('\n');

    return textToSend;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
