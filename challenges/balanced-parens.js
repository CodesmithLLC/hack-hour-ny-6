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

function balancedParens(input, stack = []) {
  if (input.length === 0) return stack.length === 0

  let lastElement = stack[stack.length - 1]

  switch (input[0]) {
    case "(":
      stack.push("(")
      break
    case "[":
      stack.push("[")
      break
    case "{":
      stack.push("{")
      break
    case ")":
      if (lastElement !== "(") return false
      stack.pop()
      break
    case "]":
      if (lastElement !== "[") return false
      stack.pop()
      break
    case "}":
      if (lastElement !== "{") return false
      stack.pop()
      break
  }

  return balancedParens(input.slice(1), stack)
}

/* Attempt 1 */
// function balancedParens2(input, pStack = [], sStack = [], cStack = []) {
//   if (input.length === 0) {
//     return pStack.length === 0 && sStack.length === 0 && cStack.length === 0
//   }

//   switch (input[0]) {
//     case "(":
//       pStack.push("(")
//       break
//     case "[":
//       sStack.push("[")
//       break
//     case "{":
//       cStack.push("{")
//       break
//     case ")":
//       test = pStack.pop()
//       if (test === undefined) return false
//       previous = test
//       break
//     case "]":
//       test = sStack.pop()
//       if (test === undefined) return false
//       previous = test
//       break
//     case "}":
//       test = cStack.pop()
//       if (test === undefined) return false
//       previous = test
//       break
//   }
//   return balancedParens(input.slice(1), pStack, sStack, cStack)
// }

// console.log(balancedParens("("), false) // false
// console.log(balancedParens("()"), true) // true
// console.log(balancedParens(")("), false) // false
// console.log(balancedParens("(())"), true) // true
// console.log(balancedParens("[](){}"), true) // true
// console.log(balancedParens("[({})]"), true) // true
// console.log(balancedParens("[(]{)}"), false) // false
// console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }"), true) // true
// console.log(balancedParens(" var hubble = function() { telescopes.awesome();"), false) // false

module.exports = balancedParens
