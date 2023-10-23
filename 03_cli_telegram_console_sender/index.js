import { Command } from 'commander';
import TelegramBot from 'node-telegram-bot-api';

// add your credentials
const TG_BOT_TOKEN = '';
const TG_BOT_CHAT_ID = '';

const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

const program = new Command();

program
  .name('index.js')
  .description('CLI to send quick notes to Telegram bot')
  .version('1.0');

program
  .command('send-message')
  .description('Send a message in your Telegram bot')
  .argument('<message>', 'message to send')
  .action(async message => {
    try {
      await bot.sendMessage(TG_BOT_CHAT_ID, message);
      console.log('Message sent successfully!');
    } catch (error) {
      console.log('Oops, some error:', error.message);
    }
    process.exit();
  });

program
  .command('send-photo')
  .description('Send a photo to your Telegram bot')
  .argument('<path>', 'path to photo')
  .action(async path => {
    try {
      await bot.sendPhoto(TG_BOT_CHAT_ID, path);
      console.log('Photo sent successfully!');
    } catch (error) {
      console.log('Oops, some error:', error.message);
    }

    process.exit();
  });

program.parse(process.argv);
