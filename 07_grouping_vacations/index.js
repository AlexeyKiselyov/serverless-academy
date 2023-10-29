const fs = require('fs');

const initialData = fs.readFileSync(
  `${__dirname}/data/initialData.json`,
  'utf-8'
);

const normalizedDataObj = JSON.parse(initialData).reduce((acc, item) => {
  const {
    user: { _id, name },
    endDate,
    startDate,
  } = item;

  const vacationsData = { startDate, endDate };

  if (!acc[_id]) {
    acc[_id] = {
      userId: _id,
      userName: name,
      vacations: [vacationsData],
    };
  } else {
    acc[_id].vacations.push(vacationsData);
  }
  return acc;
}, {});

const normalizedDataArr = Object.values(normalizedDataObj);

const normalizedData = JSON.stringify(normalizedDataArr, null, 2);

fs.writeFileSync(`${__dirname}/data/normalizedData.json`, normalizedData);
