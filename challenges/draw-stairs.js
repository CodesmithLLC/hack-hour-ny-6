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
    let space = n;
    let step = ''
    let spaceCounter = n - 1;
    for(let i = n; i > 0; i--) {
        console.log(step.length)
        while(spaceCounter.length < n) {
            console.log('hi')
            step += ' ';
        }
        step += '*';
        
        console.log(step)
        step = '';
    }
}
drawStairs(6);
// module.exports = drawStairs;
