const {
  sortedWordsAlphabet,
  sortedNumbIncr,
  sortedNumbDecr,
  sortedWordsByLength,
  uniqueWords,
} = require('./sortMethods');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortGame = () => {
  rl.question(
    'Hello. Enter words or numbers separated by spaces (or "exit" to quit):',
    value => {
      if (value.length < 1) {
        sortGame();
        return;
      }
      if (value === 'exit') {
        console.log('Bye, have a good day!');
        rl.close();
        return;
      }

      const inputData = value.split(' ');

      rl.question(
        'How would you like to sort values:\n 1.Sort words alphabetically\n 2.Show numbers from lesser to greater\n 3.Show numbers from bigger to smaller\n 4.Display words in ascending order by number of letters\n 5.Show only unique words \n \n Select (1-5) and press ENTER:',

        selectedValue => {
          switch (selectedValue) {
            case '1':
              sortedWordsAlphabet(inputData);
              break;

            case '2':
              sortedNumbIncr(inputData);
              break;

            case '3':
              sortedNumbDecr(inputData);
              break;

            case '4':
              sortedWordsByLength(inputData);
              break;

            case '5':
              uniqueWords(inputData);
              break;

            default:
              console.log(
                'You need to enter a number between 1 and 5. Try again...'
              );
          }

          sortGame();
        }
      );
    }
  );
};

sortGame();
