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

function areSameSymbol(a, b) {
  if (a === '(' && b === ')' || a === '{' && b === '}' || a === '[' && b === ']') return true;
  return false;
}

function balancedParens(input) {
  // the input length is an odd number
  if (input.length % 2 === 1 || input.length === 0) {
    return false;
  }

  if (input[0] === ')') return false;

  if (input.length === 2 && areSameSymbol(input[0], input[1])) return true;

  if (input[0] === '(') return balancedParens(input.slice(1, input.length - 1));
}

module.exports = balancedParens;
