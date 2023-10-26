<h1 align = "center">5th Task.TELEGRAM BOT: EXCHANGE RATES</h1>

## Guide:

1.  <a href = "https://nodejs.org/uk" target="_blank" rel="noreferrer noopener">Need
    NODE.js.</a>
2.  Write in terminal `cd src`.
3.  Write in terminal `npm i` to load modules.
4.  Add your credentials (`token` of the bot, `openweathermap API key` and City
    in `./helpers/constants.js`).
5.  Write in terminal:

- `npm start` or `node ratesTgBot.js` to launch a bot;

<h2 align = "center"> Task description.</h2>

In this task we will create a bot for getting the exchange rate. You can use a
previously created bot, or create a new one.

### ❕Bot requirements

- The bot must have two buttons that will allow you to find out the USD and EUR
  exchange rates. Use PrivatBank and Monobank APIs for that.
- Keep in mind that Monobank does not allow you to make requests more than once
  every 60 seconds, while your bot may be used by dozens of people. Implement
  this logic, so the bot will not return an error, but will provide actual
  exchange rates. For example, you can cache results: take a look at node-cache
  library.

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
