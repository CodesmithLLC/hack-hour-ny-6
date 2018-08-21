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
	let firstOpen = input.indexOf("(")
	let lastOpen = input.lastIndexOf("(")

	let firstClosed = input.indexOf(")")
	let lastClosed = input.lastIndexOf(")")

	let totalOpen = input.substring(firstOpen, lastOpen+1).match(/\(|\[|\{/g)   
	let totalClosed = input.substring(firstClosed, lastClosed+1).match(/\)|\]|\}/g)

	if (input.match(/\(|\)/g).length %2 !== 0 || lastOpen > firstClosed) return false
	if (totalOpen.length === totalClosed.length) return true
}

module.exports = balancedParens;
