'use strict';
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

function EventEmitter() {
  this.storage = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if(this.storage[funcName]){
    this.storage[funcName].push(func); return;
  }
  this.storage[funcName] = [func]; return;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if(this.storage[funcName]){
    return this.storage[funcName].forEach( func => {
      func(...args)
    });
  }
  return `Event "${funcName}" does not exist`; 
};


let instance = new EventEmitter();
let counter = 0;
instance.on('increment', function() {
  counter++;
}); // counter should be 0

instance.trigger('increment'); 
instance.trigger('increment');
console.log(instance.trigger('john'));

module.exports = EventEmitter;
