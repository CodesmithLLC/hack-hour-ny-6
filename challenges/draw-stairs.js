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

function drawStairs(n, stop = n) {
  if (!stop) return; 
  let i = 0;
  let nextStr = '';
  while(i <= n) {
    if (i < stop) {
      nextStr += ' ';
    } else {
      nextStr += '*';
    }
    i += 1;
  }
  console.log(nextStr);
  drawStairs(n, stop - 1);
}

function drawStairs2(n, stop = n - 1, str = '') {
  if(stop < 0) return;
  if(str.length === n){
    console.log(str);
    return drawStairs2(n, stop - 1, str = '');
  }
  if(str.length < stop) {
    return drawStairs2(n, stop, str += ' ')
  }
  if(str.length >= stop) {
    return drawStairs2(n, stop, str += '*')
  }
}
drawStairs2(6);

module.exports = drawStairs;
