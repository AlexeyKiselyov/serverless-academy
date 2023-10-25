export const optionsCity = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Forecast in Bakhmut 🌡️', callback_data: '/forecastInBakhmut' }],
    ],
  }),
};

export const optionsInterval = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 'At intervals of 3 hours 🕒', callback_data: '3' },
        { text: 'At intervals of 6 hours 🕕', callback_data: '6' },
      ],
    ],
  }),
};
