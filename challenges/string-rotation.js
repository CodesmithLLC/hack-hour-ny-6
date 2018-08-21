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


// RECURSION ANSWER
function stringRotation(s1,s2, count = s1.length) {
  // Check if same length if not return false
  if(s1.length !== s2.length) {
    return false;
  }
  // Check if count (the amount of checks) is finished
  if(count === 0) {
    return false;
  }
  // Check s1 to s2
  let check = isSubstring(s1,s2);
  // If check is ever true then return true
  if(check === true) {
    return true;
  }
    // Hold first character to append to the end
    let first = s1.substring(1)
    // Append first character of string to the end
    s1 = first + s1[0]
    count--;
    //loop check until s1.length
    return stringRotation(s1,s2, count)
}


// // ANSWER THAT LOOPS OVER CALL
// function stringRotation(s1, s2) {
//   // Check if same length if not return false
//   if(s1.length !== s2.length) {
//     return false;
//   }
//   for(let i = 0; i < s1.length; i++) {
//     // Check s1 to s2
//     let check = isSubstring(s1,s2)
//     // If check is ever true then return true
//     if(check === true) {
//       return true
//     }
//     // Hold first character to append to the end
//     let first = s1.substring(1)
//     // Append first character of string to the end
//     s1 = first + s1[0]
//     //loop check until s1.length
//   }
//   return false;
// }


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
