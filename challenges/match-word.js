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

function matchWord(str) {
  const strArr = str.split('');
    let forwardStr = [];
    let backwardsStr = [];
    const allStrings = [];
    let spaceFound = false
    for (let i = 0; i < strArr.length; i++){
      // console.log(strArr[i]);
      if (strArr[i].match(/[a-z]/i)){
        if (spaceFound){
          backwardsStr.push(strArr[i]);
        } else {
          forwardStr.push(strArr[i]);
        }
        // console.log({forwardStr});
        // console.log({backwardsStr});
      } else {
        if (forwardStr.length > 0){
          spaceFound = true;
          allStrings.push(forwardStr);
          forwardStr = [];
        }
        if (backwardsStr.length > 0){
          allStrings.push(backwardsStr);
          backwardsStr  = [];
          spaceFound = false;
        }
      }
    }
    console.log({allStrings});
    let isMatch = false
    for ( let i = 0; i < allStrings.length; i++){
      const last = (allStrings.length - (i + 1));
      if (allStrings.length < 2){
        return isMatch;
      }
      if (allStrings[i].join().toLowerCase() === allStrings[last].reverse().join().toLowerCase()){
        isMatch = true;
      } else {
        isMatch = false
      }
    }
   return isMatch;
}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
module.exports = matchWord;
