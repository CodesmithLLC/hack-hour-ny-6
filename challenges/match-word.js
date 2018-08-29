// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

const keyObj = {
  end: 'dne',
  if: 'fi',
  for: 'rof',
  while: 'elihw',
  try: 'yrt',
};

const myStack = [];

function matchWord(str) {
  // set str to lowercase
  const adjStr = str.toLowerCase();
  // remove the trailing punctuations that any ends of the letters
  const found = adjStr.match(/([a-zA-Z]+)/g);

  if (found.length === 1) return false;

  // iterate through found array
  while (found.length !== 1) {
    myStack.push(found.pop());
  }

  while (myStack.length !== 0) {
    if (keyObj[myStack.pop()] === found[0]) return true;
  }

  return found;
}

module.exports = matchWord;

console.log(matchWord('__END_DNE---------'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@while try ! yrt for if_fi rof #*# elihw'));
