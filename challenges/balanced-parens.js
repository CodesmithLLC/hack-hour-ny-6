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
    let brackArr = [3];
    brackArr[0] = 0 
    brackArr[1] = 0 
    brackArr[2] = 0
    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(') {
            brackArr[0] = (brackArr[0] + 1)
        }
        if(input[i] === '{') {
            brackArr[1] = (brackArr[1] + 1)
        }
        if(input[i] === '[') {
            brackArr[2] = (brackArr[2] + 1)
        }
        if(input[i] === ')' && brackArr[0] === 0) {
            return false
        }
        if(input[i] === ')' && brackArr[0] > 0) {
            brackArr[0] = (brackArr[0] - 1)
        }
        if(input[i] === '}' && brackArr[1] === 0) {
            return false
        }
        if(input[i] === '}' && brackArr[1] > 0) {
            brackArr[1] = (brackArr[1] - 1)
        }
        if(input[i] === ']' && brackArr[2] === 0) {
            return false
        }
        if(input[i] === ']' && brackArr[2] > 0) {
            brackArr[2] = (brackArr[2] - 1)
        }
    }
    return brackArr[0] === 0 && brackArr[1] === 0 && brackArr[2] === 0 ? true : false
}
module.exports = balancedParens;