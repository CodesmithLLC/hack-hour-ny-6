/* Write a function that console logs a staircase of any given height where 
1 <= N <= 100.
 
 The staircase must climb up from left to right. The last line should only 

 consist of asterisks,
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

function drawStairs(n, spaces = 0) {

  // base case 
  if (n === 1) {
  	console.log(' '.repeat(n) + '*'.repeat(spaces))
  	// console.log("*")
  	return;
  }
  debugger;
  console.log(' '.repeat(n) + '*'.repeat(spaces))
  drawStairs(n-1, spaces + 1)
}

drawStairs(5)


// module.exports = drawStairs;
