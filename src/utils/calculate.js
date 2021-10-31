const calcNoOfIntegers = (numbersArr) => {
  return numbersArr.length;
};

const calcMean = (numbersArr, dp = 3) => {
  const reducer = (total, amount) => total + amount;
  const mean = numbersArr.reduce(reducer) / numbersArr.length;
  return mean.toFixed(dp);
};

const findHighest = (numbersArr) => {
  return Math.max(...numbersArr);
};

/**Hashmap starts as an empty object and for each number in the array, we will check if this number
 * is already in the object, if not a key-value pair will be added to the object e.g. {"137": 1} and
 * if already in the object the value of that key will be increased by 1.
 * Hashmap will look like this { '186': 1, '187': 2, '284': 1, '327': 2, '-368': 1, '-616': 1 }
 */
const findMostCommon = (numbersArr) => {
  const hashmap = numbersArr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  console.log(hashmap);
  const mostCommonKey = Object.keys(hashmap).reduce((a, b) => {
    return hashmap[a] > hashmap[b] ? a : b;
  });
  const mostCommonValueArr = Object.keys(hashmap).filter((x) => {
    if (hashmap[x] === hashmap[mostCommonKey]) {
      return x;
    }
  });
  return {
    valuesArr: mostCommonValueArr,
    noOfOccurrences: hashmap[mostCommonKey],
  };
};

module.exports = {
  calcNoOfIntegers,
  calcMean,
  findHighest,
  findMostCommon,
};
