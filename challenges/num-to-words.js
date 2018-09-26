// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  let lowNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ]
  let tens = [
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ]
  let biggerNumbers = [
    'hundred',
    'thousand',
    'million'
  ]
  if(num >= 0 && num <= 19) {
    return lowNumbers[num];
  }
  let toString = '';
  var arrays = [], size = 3;
  num = num.toString().split('')
  while (num.length > 0) {
      arrays.push(num.splice(0, size));
  }
  let i = 0, j=0;
  while(arrays.length > i) {
    while(j < 3) {
      if(arrays[i].length === 3) {
        if(j === 0) {
          toString += lowNumbers[arrays[i][j]]
          toString += biggerNumbers[j];
        }
        if(j === 1) {
          toString += tens[Number(arrays[i][j]) - 2]
        }
        if(j === 2) {
          if(lowNumbers[arrays[i][j]] !== 'zero') {
            toString += lowNumbers[Number(arrays[i][j])];
          }
        }
      }
      j++
    }
    j=0;
    i++
  }
  return toString;
}

module.exports = numToWords;
// console.log(numToWords(12045))