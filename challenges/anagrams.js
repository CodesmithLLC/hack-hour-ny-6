/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example:
 * var result = anagrams('abc');
 * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function anagrams(string) {
  // store permutations in array
  const permutations = [];
  let counter = 0;
  // create function that builds permutations
  function getPerms(string, currString = "") {
    counter++;
    // base case: after using all characters from string, save anagram in array.
    if (string === "") permutations.push(currString);
    // loop through string
    for (let i = 0; i < string.length; i++) {
      // take letter at current index
      const chosen = string.charAt(i);
      // store the rest of the letters for the next call
      const remaining = string.slice(0, i) + string.slice(i + 1);
      console.log(
        "i",
        i,
        "counter",
        counter,
        "currString",
        currString,
        "string",
        string,
        "chosen",
        chosen,
        "remaining",
        string.slice(0, i),
        string.slice(i + 1)
      );
      // pass the rest of the letters and the built up current string to the recursive call.
      getPerms(remaining, currString + chosen);
    }
  }
  // call getPerms on string input
  getPerms(string);
  // return perms array
  return permutations;
}

module.exports = anagrams;
