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

//['[',']','(',')','{','}']

function balancedParens(input){
  const stack = input.split('');
  let closeChar = '';
       
  //input.length???
  while (stack.length) {
    const temp = stack[stack.length - 1]
    if (temp === '}' || temp === ']' || temp === ')') {
      closeChar = stack.pop();
    }
    console.log(stack, closeChar)
    const char = stack.pop();
    if (char === '{' && closeChar === '}') {
      return stack.length ? balancedParens(stack.join('')) : true
    }
    if (char === '(' && closeChar === ')') {
      return stack.length ? balancedParens(stack.join('')) : true
    }
    if (char === '[' && closeChar === ']') {
      return stack.length ? balancedParens(stack.join('')) : true
    }
    if (char === ')' || char === '}' || char === ']') {
      return stack.length ? balancedParens(stack.concat(char).join('')) : false;
    }
  }
  return false
}
const test1 = '[](){}' //true
const test2 = '[({})]' //true
const test3 = '[(]{)}' //false
const res = balancedParens(test2);
console.log(res)

module.exports = balancedParens;
