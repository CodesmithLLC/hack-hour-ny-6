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
    let chars = '*';
    for(let i = 1; i <= n; i++) {
        let stairs = new Array(6);
        stairs.fill(' ', 0, n-i);
        stairs.fill('*', n-i, n);
        console.log(stairs.join(''));
    }
}


module.exports = drawStairs;
