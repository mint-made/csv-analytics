const {
  calcNoOfIntegers,
  calcMean,
  findHighestOccurrence,
  findMostCommon,
} = require('../utils/calculate');

const testData = [15, 2, 4, 2, 27, 186, -49, 15, 15, -89];

test('The number of integers in the test data is 10', () => {
  expect(calcNoOfIntegers(testData)).toBe(10);
});

test('The mean of the test data is 12.800', () => {
  expect(calcMean(testData)).toBe('12.800');
});

test('The highest occurrence of an integer in the test data is 15', () => {
  expect(findHighestOccurrence(testData)).toBe(3);
});

test('The most common integer is 15 in the test data', () => {
  expect(findMostCommon(testData)).toBe('15');
});
