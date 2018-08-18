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
  const arr1 = s1.split("");
  const arr2 = s2.split("");

  if (arr1.length !== arr2.length){
    return false
  }
  console.log({arr1});
  console.log({arr2});
  const part1 = [];
  const part2 = [];
  let foundFirst = false

  for (let i=0; i < arr1.length; i++){
    if (foundFirst){
      part1.push(arr2[i]);
    } else if (arr2[i] === arr1[0]){
        part1.push(arr2[i]);
        foundFirst = true
      } else {
        part2.push(arr2[i]);
      }
    }
    const word2 = [...part1, ...part2];
    if (s1 === word2.join("")){
      return true
    }
    return false
    console.log({part1});
    console.log({part2});
    console.log({word2});
}

console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "he"))
console.log(stringRotation("hello", "ollhe"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
