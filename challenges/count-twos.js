// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let twos = 0
  for (let i=0; i<=num; i++){
    const numArr = i.toString().split('');
    for (let j=0; j<numArr.length; j++){
      if (numArr[j] === '2'){
        twos++
      }
    }
  }
  return twos
}

console.log(countTwos(1))
console.log(countTwos(3))
console.log(countTwos(13));
console.log(countTwos(1000));
console.log(countTwos(11420));

module.exports = countTwos;
