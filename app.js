const fs = require('fs');
const csv = require('csv-parser');

const numbersArr = [];

/**Creates a readstream, so the data can be read and piped to
 *  the csv function (csv-parser package), from which we can write
 * the data to the numberArr variable */
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    numbersArr.push(row.number);
  })
  .on('end', () => {
    console.log(numbersArr.slice(0, 5));
    writeToCSVFile(numbersArr);
  });

// Takes in a numbers array and returns the numbers in a csv formatted string
const convertToCSV = (numbersArr) => {
  const header = ['numbers'];
  console.log(typeof header.concat(numbersArr).join('\n'));
  return header.concat(numbersArr).join('\n');
};

// Takes in a numbers array and outputs a csv file of the numbers in a single column
const writeToCSVFile = (numbersArr) => {
  const filename = 'outputData.csv';
  fs.writeFile(filename, convertToCSV(numbersArr), (error) => {
    if (error) {
      console.log('Error writing to csv file', error);
    } else {
      console.log(`Saved as ${filename}`);
    }
  });
};
