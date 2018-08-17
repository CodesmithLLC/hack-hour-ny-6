// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  const arr = [];
  let currentNum = 1;

  for (let i=0; i < num; i++){
    if (currentNum % 3 === 0 && currentNum % 5 === 0){
      arr.push('fizzbuzz');
    } else if (currentNum % 3 === 0){
      arr.push('fizz');
    } else if (currentNum % 5 === 0){
      arr.push('buzz');
    } else {
      arr.push(currentNum);
    }
    currentNum++
  }
  return arr;
}

console.log(fizzbuzz(16));


module.exports = fizzbuzz;
