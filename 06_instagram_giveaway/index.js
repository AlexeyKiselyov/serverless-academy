const fs = require('fs/promises');
const path = require('path');

const leastFilesQuantity = 10;

// Indicates processing time
function timestamp() {
  return `${performance.now().toFixed(2)}ms`;
}

const dataPath = path.join(__dirname, './data');

// Get an array from arrays with unique users
async function getArrsOfUniqueUsers() {
  try {
    const filesNamesArr = await fs.readdir(dataPath);

    const arrsOfUniqueUsers = await Promise.all(
      filesNamesArr.map(async path => {
        const data = (await fs.readFile(`${dataPath}/${path}`, 'utf-8')) || [];
        return [...new Set(data.split('\n'))];
      })
    );

    return arrsOfUniqueUsers;
  } catch (error) {
    console.log(error.message);
  }
}

//Looking for a number of users who are present in a particular collaboration files
async function findExist(arrsOfUniqueUsers, quantity) {
  const usernameCounts = {};
  for (const arrOfUniqueUsers of arrsOfUniqueUsers) {
    arrOfUniqueUsers.forEach(username => {
      if (usernameCounts[username]) {
        usernameCounts[username] += 1;
      } else {
        usernameCounts[username] = 1;
      }
    });
  }
  const existInNessFiles = Object.values(usernameCounts).filter(
    value => value >= quantity
  );
  return existInNessFiles.length;
}

// Determine how many unique usernames there are in all the specified files
async function uniqueValues() {
  const arrsOfUniqueUsers = await getArrsOfUniqueUsers();
  let uniqueUsersSet = new Set();

  arrsOfUniqueUsers.forEach(arrOfUsers => {
    arrOfUsers.forEach(user => {
      uniqueUsersSet.add(user);
    });
  });
  console.log(`Unique Values:${uniqueUsersSet.size} Time:${timestamp()}`);
  return uniqueUsersSet.size;
}

// Determine how many usernames occur in all files
async function existInAllFiles() {
  const arrsOfUniqueUsers = await getArrsOfUniqueUsers();
  const allFilesQuantity = arrsOfUniqueUsers.length;
  const filesQuantity = await findExist(arrsOfUniqueUsers, allFilesQuantity);
  console.log(`Exist in all files:${filesQuantity} Time:${timestamp()}`);
  return filesQuantity;
}

// Find out how many usernames occur in at least 10 files
async function existInAtleastTen() {
  const arrsOfUniqueUsers = await getArrsOfUniqueUsers();
  const filesQuantity = await findExist(arrsOfUniqueUsers, leastFilesQuantity);
  console.log(`Exist at least ten:${filesQuantity} Time:${timestamp()}`);
  return filesQuantity;
}

// -----Uncover the necessary function:-----

// uniqueValues(); //129240
// existInAllFiles(); //441
// existInAtleastTen(); //73245
