function sortedWordsAlphabet(inputData) {
  const result = [...inputData]
    .filter(item => !Number(item))
    .sort((a, b) => a.localeCompare(b));
  console.log(result);
}

function sortedNumbIncr(inputData) {
  const result = [...inputData]
    .filter(item => Number(item))
    .sort((a, b) => a - b);
  console.log(result);
}

function sortedNumbDecr(inputData) {
  const result = [...inputData]
    .filter(item => Number(item))
    .sort((a, b) => b - a);
  console.log(result);
}

function sortedWordsByLength(inputData) {
  const result = [...inputData]
    .filter(item => !Number(item))
    .sort((a, b) => a.length - b.length);
  console.log(result);
}

function uniqueWords(inputData) {
  const result = Array.from(
    new Set([...inputData].filter(item => !Number(item)))
  );
  console.log(result);
}

module.exports = {
  sortedWordsAlphabet,
  sortedNumbIncr,
  sortedNumbDecr,
  sortedWordsByLength,
  uniqueWords,
};
