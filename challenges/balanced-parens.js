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

function balancedParens(input) {
  const roundArr = [];
  const squareArr = [];
  const birdyArr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      roundArr.push(input[i]);
    }
    if (input[i] === ")") {
      while (!roundArr.pop()) {
        return false;
      }
    }
    if (input[i] === "[") {
      squareArr.push("[");
    }
    if (input[i] === "]") {
      while (!squareArr.pop()) {
        return false;
      }
    }
    if (input[i] === "{") {
      birdyArr.push("{");
    }
    if (input[i] === "}") {
      while (!birdyArr.pop()) {
        return false;
      }
    }
  }
  while (
    roundArr.length === 0 &&
    squareArr.length === 0 &&
    birdyArr.length === 0
  ) {
    return true;
  }
  return false;
}

console.log(balancedParens("[](){}")); // true
console.log(balancedParens("[({})]")); // true
console.log(balancedParens("[(]{)}")); // false
console.log(balancedParens("()")); // true
console.log(balancedParens(")(")); // false
console.log(balancedParens("(())")); // true

module.exports = balancedParens;
