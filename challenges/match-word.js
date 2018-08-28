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
  const keywords = {
    end: 'dne',
    for: 'rof',
    if: 'fi',
    try: 'ryt',
    while: 'elihw'
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  if (str.length === 0 || str.trim().length === 0) return true

  const tokens = [...str].trim().map(char => char.toLowerCase())
  return process(tokens)

  // ---

  function process(tokens, acc = true, found = []) {
    if (tokens.length === 0) return acc

    const current = token.slice(0, 1)
    if (found.length !== 0) {
    }

    return process(tokens.slice(1), acc, found)
  }
}

console.log(matchWord('__END_DNE-----'), '-> true')
// console.log(
//   matchWord('__ENDDNE__'),
//   '-> false       (not separated by a space)'
// )
// console.log(
//   matchWord('IF()()fi[]'),
//   '-> true        (should be case-insensitive)'
// )
// console.log(
//   matchWord('for__if__rof__fi'),
//   '-> false     not properly closed. like ( [) ] '
// )
// console.log(
//   matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'),
//   '-> true'
// )
// console.log(matchWord(''), '-> true')

module.exports = matchWord
