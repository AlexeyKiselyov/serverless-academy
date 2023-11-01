const axios = require('axios');

const endpoints = require('./data/endpoints.js');

const dataSearchQwery = 'isDone';

// get data from endpoint up to three attempts
async function getData(endpoint, attempt = 3) {
  try {
    const { data } = await axios.get(endpoint);
    return data;
  } catch (error) {
    if (attempt > 0) {
      return getData(endpoint, attempt - 1);
    } else {
      return null;
    }
  }
}

// search for required key data in the object
async function getIsDoneInfo(obj) {
  if (obj[dataSearchQwery] !== undefined) {
    return obj[dataSearchQwery];
  } else {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'object') {
        const result = await getIsDoneInfo(obj[key]);
        if (result !== undefined) {
          return result;
        }
      }
    }
  }
  return undefined;
}

// main json sorting function
async function jsonSorting() {
  let trueValuesCount = 0;
  let falseValuesCount = 0;
  let failValuesCount = 0;

  for (const endpoint of endpoints) {
    const data = await getData(endpoint);

    if (data) {
      const isDoneInfo = await getIsDoneInfo(data);
      if (typeof isDoneInfo === 'boolean') {
        console.log(
          `[Success] ${endpoint}: isDone - ${isDoneInfo ? 'True' : 'False'}`
        );

        isDoneInfo ? trueValuesCount++ : falseValuesCount++;
      }
      if (isDoneInfo === undefined) {
        console.log(
          `[Fail] ${endpoint}: '${dataSearchQwery}' key was not found in data`
        );
      }
    } else {
      console.log(`[Fail] ${endpoint}: The endpoint is unavailable`);

      failValuesCount++;
    }
  }

  console.log(`Found True values: ${trueValuesCount}`);
  console.log(`Found False values: ${falseValuesCount}`);
  console.log(`Failures: ${failValuesCount}`);
}

jsonSorting();
