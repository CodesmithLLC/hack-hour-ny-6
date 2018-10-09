"use strict";
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for (let i = 0; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};


function sumMultiples3Or5Below1000() {
  let sum = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// O(1)
function sumMultiples3Or5Below1000() {
  const greatestMultiple3Below1000 = 999 - (999 % 3);
  const sumOfMultiples3Below1000 = greatestMultiple3Below1000 * (greatestMultiple3Below1000 + 3) / (2 * 3);

  const greatestMultiple5Below1000 = 999 - (999 % 5);
  const sumOfMultiples5Below1000 = greatestMultiple5Below1000 * (greatestMultiple5Below1000 + 5) / (2 * 5);
  
  const greatestMultiple15Below1000 = 999 - (999 % 15);
  const sumOfMultiples15Below1000 = greatestMultiple15Below1000 * (greatestMultiple15Below1000 + 15) / (2 * 15);

  return sumOfMultiples3Below1000 + sumOfMultiples5Below1000 - sumOfMultiples15Below1000;
}

console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z

// O(n)
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  for (let i = 1; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }

  return sum;
}

// O(1)
function sumMultiplesXOrYBelowZ(x, y, z) {
  const greatestMultipleXBelowZ = (z - 1) - ((z - 1) % x);
  const sumOfMultiplesXBelowZ = greatestMultipleXBelowZ * (greatestMultipleXBelowZ + x) / (2 * x);

  const greatestMultipleYBelowZ = (z - 1) - ((z - 1) % y);
  const sumOfMultiplesYBelowZ = greatestMultipleYBelowZ * (greatestMultipleYBelowZ + y) / (2 * y);
  
  const greatestMultipleXandYBelowZ = (z - 1) - ((z - 1) % (x * y));
  const sumOfMultiplesXandYBelowZ = greatestMultipleXandYBelowZ * (greatestMultipleXandYBelowZ + (x * y)) / (2 * (x * y));

  return sumOfMultiplesXBelowZ + sumOfMultiplesYBelowZ - sumOfMultiplesXandYBelowZ;
}

console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

module.exports = objectToExport;
