"use strict";
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
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

module.exports = EventEmitter;
