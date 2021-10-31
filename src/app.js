const fs = require('fs');
const csv = require('csv-parser');

const { writeToCSVFile } = require('./utils/writeToCSVFile');
const { genStatisticStatement } = require('./utils/analytics');

const numbersArr = [];

/**Creates a readstream, so the data can be read and piped to
 *  the csv function (csv-parser package), from which we can write
 * the data to the numberArr variable */
fs.createReadStream('smallData.csv')
  .pipe(csv())
  .on('data', (row) => {
    numbersArr.push(Number(row.number));
  })
  .on('end', () => {
    console.log(genStatisticStatement(numbersArr));
    writeToCSVFile(numbersArr);
  });
