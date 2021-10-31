const chalk = require('chalk');

const {
  calcNoOfIntegers,
  calcMean,
  findHighest,
  findMostCommon,
} = require('./calculate');

const genStatisticStatement = (numbersArr) => {
  return `There are ${chalk.green.bold.inverse(
    calcNoOfIntegers(numbersArr)
  )} integers with a mean of ${chalk.green.bold.inverse(
    calcMean(numbersArr, 3)
  )}, highest value of ${chalk.green.bold.inverse(
    findHighest(numbersArr)
  )}, most common value(s) of ${chalk.green.bold.inverse(
    findMostCommon(numbersArr).valuesArr.join(' | ')
  )} which occured ${chalk.green.bold.inverse(
    findMostCommon(numbersArr).noOfOccurrences
  )} time(s)`;
};

module.exports = {
  genStatisticStatement,
};
