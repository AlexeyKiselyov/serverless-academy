import fs from 'fs/promises';
import inquirer from 'inquirer';
import path from 'path';

const dirname = process.cwd();
const usersPath = path.join(dirname, './db/users.txt');

async function getUserData() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter a name (press Enter to stop adding users):',
    },
    {
      type: 'list',
      name: 'gender',
      message: 'Choose a gender:',
      choices: ['Male', 'Female', 'Other'],
      when: answers => answers.name,
    },
    {
      type: 'input',
      name: 'age',
      message: 'Specify age:',
      validate: input => {
        const age = parseInt(input);
        if (age && age > 0) {
          return true;
        }
        return 'Please enter a valid age (number more than 0).';
      },
      when: answers => answers.name,
    },
  ];

  try {
    const userData = await inquirer.prompt(questions);
    return userData;
  } catch (error) {
    console.log(error.message);
  }
}

async function addUser(user) {
  try {
    await fs.appendFile(usersPath, JSON.stringify(user) + '\n');
    console.log('User added to the database.');
    primitiveDb();
  } catch (error) {
    console.log('Error adding user to the database:', error.message);
  }
}

async function searchUser() {
  try {
    const { search } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'search',
        message: 'Do you want to search for a user by name?',
      },
    ]);

    if (search) {
      const { name } = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the name to search for:',
        },
      ]);
      await findUserInDb(name);
    }
  } catch (error) {
    console.log('Oops, some error:', error.message);
  }
}

async function findUserInDb(name) {
  try {
    const users = await fs.readFile(usersPath, 'utf-8');
    const result = users
      .split('\n')
      .filter(user => user.trim())
      .filter(
        user =>
          JSON.parse(user).name.toLowerCase() === name.trim().toLowerCase()
      );

    if (result) {
      console.log('\n User(s) found: \n');
      result.forEach((user, ind) => {
        console.log(`${ind + 1}. `, JSON.parse(user));
      });
    } else {
      console.log('User not found in the database.');
    }
  } catch (error) {
    console.error('Error reading the database:', err);
  }
}

async function primitiveDb() {
  const userData = await getUserData();

  if (userData.name) {
    await addUser(userData);
  } else {
    await searchUser();
  }
}

primitiveDb();
