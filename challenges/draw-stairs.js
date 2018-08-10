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
    let aster = '';
    let space = ' ';
    for (let i =1; i<= n; i++){
        let arr = new Array(n).fill(' ');
        let aster = Math.floor(arr.length)/2
        
            if (i === n){
                console.log(aster);
            }else{
                space += ' ';
                console.log(" " + aster + space)
            }
    }
}
console.log(new Array().fill('*'));
drawStairs(10)
module.exports = drawStairs;
