<h1 align = "center">3rd Task.CLI: TELEGRAM CONSOLE SENDER</h1>

## Guide:

1.  <a href = "https://nodejs.org/uk" target="_blank" rel="noreferrer noopener">Need
    NODE.js.</a>
2.  Write in terminal `cd src`.
3.  Write in terminal `npm i` to load modules.
4.  Add your Telegram credentials (`token` and `chatId` of the bot).
5.  Write in terminal:

- `node index.js send-message 'Your message'` to send a message in your Telegram
  bot;
- `node index.js send-photo '/path/to/the/photo'` to send a photos to your
  Telegram bot from your PC.

<h2 align = "center"> Task description.</h2>

New day, new CLI application. In this task we will create a simple telegram bot
that can act as notes or notepad when you need to save something urgently from
the console.

### Tools and libraries you can use

- `commander` - this library helps you organize your app with commands and
  command-specific options;
- `node-telegram-bot-api` - just a wrapper on top of Telegram Bot API.

### Commands

Here is the list of commands that your app should support

1. Send a message

- `$ node app.js send-message 'Your message'`;
- The result of executing this command is the appearance of your message in your
  Telegram bot. After it has been executed, the CLI terminates the process
  itself to allow you to enter the next command.

2. Send a photo

- `$ node app.js send-photo '/path/to/the/photo.png'`;
- The result of this command is a photo sent to the Telegram bot from your PC.
  After it has been executed, the CLI terminates the process itself to allow you
  to enter the next command.

### NOTE:

Take care of your users beforehand - make sure you added descriptions about the
commands and their options. The user should be able to see it using help command
or --help argument.

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
