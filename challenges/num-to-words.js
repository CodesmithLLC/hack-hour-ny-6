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
    const wordNumArr1 = {
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
      10: 'Ten',
      11: 'Eleven',
      12: 'Twelve',
      13: 'Thirteen',
      14: 'Fourteen',
      15: 'Fifteen',
      16: 'Sixteen', 
      17: 'Seventeen',
      18: 'Eighteen',
      19: 'Nineteen',
     
    }
  
    const higherNum = {
      20: 'Twenty',
      30: 'Thirty',
      40: 'Fourty',
      50: 'Fifty',
      60: 'Sixty',
      70: 'Seventy',
      80: 'Eighty',
      90: 'Ninety',
      100: 'Hundred',
      1000: 'Thousand',
      1000000: 'Million',
      1000000000: 'Billion',
      1000000000000: 'Trillion',
      1000000000000000: 'Quadrillion'
    }
    const higherNumsArr = Object.keys(higherNum);
    if(hi)
    numLength = String(num).length;
    num = String(num);
    let word = 
    switch(numLength) {
      case 1: 
        return wordNumArr1[num];
      case 2:
        return num < 20 ? num : for(let i = num.length - 1; i++) {
          word += wordNums[]
        }
    }
  }
  
  
  console.log(numToWords(0)) //  -> 'Zero'
  // console.log(numToWords(43)) //-> 'FortyThree'
  // console.log(numToWords(2999)) //-> 'TwoThousandNineHundredNintyNine'
  // console.log(numToWords(15)// -> 'Fifteen'
  // console.log(numToWords(2483579411))// -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
  // console.log(numToWords(300525151340440))// -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
  // console.log(numToWords(92120000000000000)// -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
