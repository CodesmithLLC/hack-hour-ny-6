/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let acc = ""
  let counter = 1

  acc = generateLevel(counter, acc)

  function generateLevel(counter, acc) {
    if (counter === n) {
      return (acc += "*".repeat(counter) + "\n")
    }
    return generateLevel(counter + 1, (acc += " ".repeat(n - counter) + "*".repeat(counter) + "\n"))
  }

  console.log(acc)
}

// drawStairs(10)

module.exports = drawStairs
