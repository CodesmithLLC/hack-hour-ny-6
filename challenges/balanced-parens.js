/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){

  const inputArr = input.split("")
  //console.log(inputArr);
  // const openBracket = ['(', '[', '{'];
  // const closedBracket = [')', ']', '}'];
  const allBrackets = {
    parens: { open: '(', closed: ')'},
    bracket: { open: '[', closed: ']'},
    curly: { open: '{', closed: '}'},
  }

  let isClosed = false;
  let openBracket = ''
  let closingBracket = ''
  let countToNext = 0;
  let allClosed = []
//  let isClosed = true;

  for (let i = 0; i < inputArr.length; i++){
    countToNext ++
    for (let bracketType in allBrackets){
      if (inputArr[i] === allBrackets[bracketType].open){
        // isOpen = true;
        isClosed = false;
      //  openBracket = allBrackets[bracketType].open;
        closingBracket = allBrackets[bracketType].closed;
        countToNext = 0;
       console.log({openBracket: allBrackets[bracketType].open});
      }
    }
    if (inputArr[i] === closingBracket && countToNext <= 1){
      //currentBracket = inputArr[i]
      console.log({closingBracket});
      // return true
      // isOpen = true;
      isClosed = true;
    }
  }
  return isClosed;
}

// console.log(balancedParens('('));
// console.log(balancedParens('()'));
// console.log(balancedParens(')('));
// console.log(balancedParens('(())'));
//
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[({})]'));
// console.log(balancedParens('[(]{)}'));
console.log(balancedParens('var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens('var hubble = function() { telescopes.awesome();'));



module.exports = balancedParens;
