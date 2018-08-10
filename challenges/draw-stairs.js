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
    // nested for loop
    // row loop
    let print_row = '';
    for (let i = 0; i < n; i += 1) {
        print_row += '';

        if (i !== n - 1) {
            print_row += '*';
        }
    }
    console.log(print_row);
}


module.exports = drawStairs;

// LOCAL DEBUGGER
drawStairs(6);
