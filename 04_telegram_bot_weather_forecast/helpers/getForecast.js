import axios from 'axios';

import { API_URL } from './constants.js';

export const getForecast = async interval => {
  try {
    const forecast = await axios(API_URL);
    const filteredForecast =
      interval === '3'
        ? forecast.data.list
        : forecast.data.list.filter((_, ind) => ind % 2 === 0);

    const textToSend = filteredForecast
      .map(item => {
        const {
          dt,
          main: { temp },
          weather: [{ main }],
          wind: { speed },
        } = item;

        const currentDate = new Date(dt * 1000);
        const dateOptions = {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        };
        const dateAndTime = currentDate.toLocaleDateString([], dateOptions);

        return `${dateAndTime} => Temp: ${temp}°C => ${main} => wind: ${speed}ms`;
      })
      .join('\n');

    return textToSend;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
