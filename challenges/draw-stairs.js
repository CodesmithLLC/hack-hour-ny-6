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

String.prototype.repeat = function(length) {
    return Array(length + 1).join(this);
   };

function drawStairs(n) {
    // define spaces var
    spaces = n - 1;
    // loop n times
    for (let i = 1; i <= n; i++) {  
        // print spaces spaces, n - spaces hashes
        console.log("%s%s", " ".repeat(spaces), "#".repeat(n - spaces));
        // decrement spaces
        spaces--;
    }
return;
}

module.exports = drawStairs;
