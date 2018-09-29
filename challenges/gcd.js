/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(...nums) {
    // sort input
    const sorted = nums.sort((a, b) => {
      return a - b;
    })
    // create an array for common divisor for both inputs
    let rcd = [];
    let lcd = [];
  
    for(let i = nums[0]; i > 0; i--) {
      if(nums[0] % i === 0) {
        lcd.push(i);
      }
    }
    for(let i = nums[1]; i > 0; i--) {
      if(nums[1] % i === 0) {
        rcd.push(i);
      }
    }
    
    for(let i = 0; i < rcd.length; i++) {
      if(lcd.indexOf(rcd[i]) > -1) {
        return rcd[i];
      }
    }
  }

module.exports = gcd;