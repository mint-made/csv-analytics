const fs = require('fs');

// Takes in a numbers array and returns the numbers in a csv formatted string
const convertToCSV = (headers, statisticsArr) => {
  const statistics = statisticsArr.join(',');
  return headers.concat(statistics);
};

// Takes in a numbers array + analytics data and outputs a csv file of the numbers and analysis
const writeReportToCSVFile = (headersArr, statisticsArr) => {
  const filename = 'dataReport.csv';
  fs.writeFile(filename, convertToCSV(headersArr, statisticsArr), (error) => {
    if (error) {
      console.log('Error writing to csv file', error);
    } else {
      console.log(`Output saved as: "${filename}"`);
    }
  });
};

module.exports = { writeReportToCSVFile };
