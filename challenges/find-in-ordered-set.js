/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

let counter = 0;

function EventEmitter() {}

// store event as a property on the instance object, its value an array.
EventEmitter.prototype.on = function(eventKeyword, func) {
  // check and see if the event is already being used
  if (!this[eventKeyword]) {
    // if it is not, create the property and assign it an empty array
    this[eventKeyword] = [];
  }
  // push the function to the keywords array.
  this[eventKeyword].push(func);
};

EventEmitter.prototype.trigger = function(eventKeyword, ...args) {
  // we store the additional arguments in an array
  if (this[eventKeyword]) {
    // look through function array on keyword property
    for (var i = 0; i < this[eventKeyword].length; i++) {
      // execute each funtion and pass arguments
      this[eventKeyword][i](...args);
    }
  }
};

let instance = new EventEmitter();

instance.on("increment", function() {
  counter = counter + 1;
});

instance.trigger("increment", 5, 5, 5);
instance.trigger("increment");

console.log("the value of counter is", counter);

module.exports = findInOrderedSet;
