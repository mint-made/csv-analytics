const { convertToCSV } = require('../utils/writeToCSVFile');

('Total Integers, Mean, Highest Occurrences, Most Common, Highest, Lowest \n8,64.250,2,327,327,-616');
const headers =
  'Total Integers, Mean, Highest Occurrences, Most Common, Highest, Lowest \n';
const statisticArr = [8, 64.25, 2, 327, 327, -616];
test('The generated csv formatted string to be correct', () => {
  expect(convertToCSV(headers, statisticArr)).toBe(
    'Total Integers, Mean, Highest Occurrences, Most Common, Highest, Lowest \n8,64.25,2,327,327,-616'
  );
});
