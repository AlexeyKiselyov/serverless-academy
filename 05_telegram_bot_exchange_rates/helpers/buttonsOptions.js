export const optionsStart = {
  reply_markup: JSON.stringify({
    keyboard: [[{ text: '/Погода 🌡️' }], [{ text: '/Курс валют 💹' }]],
    resize_keyboard: true,
  }),
};

export const optionsWeatherMenu = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: 'Кожні 3 години 🕒' }, { text: 'Кожні 6 годин 🕕' }],
      [{ text: 'Вітер 💨' }],
      [{ text: 'Попереднє меню ⬅️' }],
    ],
    resize_keyboard: true,
  }),
};

export const optionsRateMenu = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: 'USD' }, { text: 'EUR' }],
      [{ text: 'Попереднє меню ⬅️' }],
    ],
    resize_keyboard: true,
  }),
};
