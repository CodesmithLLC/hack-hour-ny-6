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
  const baseTen = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten'
  }

  const teens = {
    11: 'Elevelen',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  }

  const decimalPlaces =  {
    1: 'one',
    2: 'ten',
    3: 'Hundred',
    4: 'Thousand'
  }

  const numArr = num.toString().split('')
  // console.log(numArr);
  switch (numArr.length){
    case 1:
      return baseTen[num];
    case 2:
      return teens[num];
    default:
      break
  }

  for (let i = 0; i < numArr.length; i++){
    const dec = decimalPlaces[numArr.length]
    const numWord = baseTen[numArr[0]] + dec
  }


  return numWord


  //     break;
  // if (numArr.length === 2 && numArr[0] === '1'){
  //   // console.log({num});
  //   return teens[num];
  // } else {
  //   return baseTen[num];
  // }

  // const numInWords = baseTen[num]
  // return baseTen[num];
}

console.log(numToWords(5));
console.log(numToWords(14));
console.log(numToWords(100));
console.log(numToWords(200));
module.exports = numToWords;
