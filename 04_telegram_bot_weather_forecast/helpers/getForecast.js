import axios from 'axios';

const WEATHER_API_KEY = '';
const CITY = 'Dnipro';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${WEATHER_API_KEY}`;

export const getForecast = async interval => {
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
};
