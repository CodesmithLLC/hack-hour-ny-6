/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let obj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  let result = '';
  n.toString().split('').forEach( (int, index) => {
    let number = parseInt(int);
    debugger;
    if( obj.hasOwnProperty(number)) {result = result + obj[number];}
    else {
      switch( index ){
        case 1:
          result = result + obj[number].repeat(number) || int.repeat(int[0]);
          break;
        case 2:
          result = result + obj[number].repeat(int[0]) || int.repeat(int[0]);
          break;
        case 3:
          result = result + obj[number].repeat(int[0]) || int.repeat(int[0]);
          break;
        case 4:
          result =  result + obj[number].repeat(int[0]) || int.repeat(int[0]);
      }
    }
  })
  debugger;
  return result;
}


console.log('romanNumeral(4): ', romanNumeral(4));
console.log('romanNumeral(55): ', romanNumeral(55));
console.log('romanNumeral(102): ', romanNumeral(102));
console.log('romanNumeral(200): ', romanNumeral(200));

module.exports = romanNumeral;