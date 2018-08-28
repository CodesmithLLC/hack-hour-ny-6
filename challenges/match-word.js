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

  // make a word stack object
  wordStack = {
    if: 'fi',
    case: 'esac',
    end: 'dne',
    try: 'yrt',
    for: 'rof',
    while: 'elihw', 
  }
  // check for word
    // iterate over wordstack
    const words = Object.keys(wordStack);
    const revs = Object.entries(wordStack);

  // check whether words[i] is in str, then check whether revs[i] is in str, after end of words[i]
  for (let i = 0; i < words.length; i++) {
    if (str.includes(words[i])) {
        // ,last index of word)), below
      if (str.includes(revs[i])) {
        return true;
      } else return false;
    }
    
  }

  // check whether stack is 0

  // 

}

module.exports = matchWord;
