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
  const star = 'x'
  const space = ' '
  const numStar = 0;
  const numSpace = 0

  for (let i=n, j=1; i > 0; i--, j++){
    const spaces = space.repeat(i-1)
    const stars = star.repeat(j)

    console.log(spaces + stars);
  }
}

drawStairs(20)

module.exports = drawStairs;
