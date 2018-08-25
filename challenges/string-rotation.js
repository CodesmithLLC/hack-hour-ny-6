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
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {

  if (s1.length !== s2.length) {
    return false;
  }
  // select string indecies in all orders from 0 to length
  const newString = s1 + s1;
  let string3 = '';

  // select string[i] upto string.length
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      // make into a big string
      string3 += newString[j + i];
    }
  }
  // send to isSubstring, return 
  return isSubstring(string3, s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
