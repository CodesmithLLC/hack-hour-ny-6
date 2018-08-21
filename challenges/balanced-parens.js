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
  let copy = input.slice();
  let hash = {};

  function isBalanced( character, inverse, i ){
    if(copy.lastIndexOf(inverse) > i){
      hash[i] = copy.lastIndexOf(inverse);
      copy = copy.slice(0, hash[i]);
      return true;
    } 
  }

  for( let i = 0; i< input.length ; i++){
    if( input[i] === '('){
      if(!isBalanced(input[i], ')', i)) return false;
    }

     if (input[i] === '{') {
      if(!isBalanced(input[i], '}', i)) return false;
     }

     if(input[i] === '[') {
      if(!isBalanced(input[i], ']', i)) return false;
     }
     else if ( input[i] === ')' || input[i] === '}' || input[i] === ']' && !Object.values(hash).includes(i) ) return false
  }

  if( Object.keys(hash) === undefined) return false;
  return true;

}

console.log(balancedParens('(())'));

module.exports = balancedParens;
