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

function downStairs(n){
    var result = new Array(n).fill(' ');
	for(let i = n; i > 0; i--){
  	result[i] = "*";
  console.log(result.join(''));
    
  }   
}


module.exports = drawStairs;
