const fs = require('fs');

// Takes in a numbers array and returns the numbers in a csv formatted string
const convertToCSV = (numbersArr, header = 'numbers') => {
  return [header].concat(numbersArr).join('\n');
};

// Takes in a numbers array and outputs a csv file of the numbers in a single column
const writeToCSVFile = (numbersArr) => {
  const filename = 'outputData.csv';
  fs.writeFile(filename, convertToCSV(numbersArr), (error) => {
    if (error) {
      console.log('Error writing to csv file', error);
    } else {
      console.log(`Output saved as: "${filename}"`);
    }
  });
};

module.exports = { writeToCSVFile };
