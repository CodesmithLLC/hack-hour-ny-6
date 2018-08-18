/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0
}

function stringRotation(s1, s2, counter = s1.length, bool = true) {
  if (s1.length !== s2.length) return false
  if (s1 === s2) return true
  if (counter === 0 && !bool) return false
  if (counter === 0 && bool && s1 !== s2) return false
  return stringRotation(s1, s2.slice(1) + s2[0], counter - 1, bool)
}

/* TDD */
// console.log(stringRotation("hello", "hello"), "should be", true)
// console.log(stringRotation("hello", "llohe"), "should be", true)
// console.log(stringRotation("hello", "elloh"), "should be", true)
// console.log(stringRotation("hello", "lohel"), "should be", true)
// console.log(stringRotation("hello", "he"), "should be", false)
// console.log(stringRotation("hello", "ollhe"), "should be", false)
// console.log(stringRotation("hello", "ehllo"), "should be", false)

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation }
