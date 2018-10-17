/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  return jazbook.find( array => name === array[0])[1];
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let storage = {};

  jazbook.forEach( array => {
    storage[array[0]] = array[1];
  })

  makePhoneBookObject.prototype.find = (name) => {
    return storage[name];
  }

  makePhoneBookObject.prototype.add = (array) => {
    return storage[array[0]] = array[1];
  }

  makePhoneBookObject.prototype.remove = (name) => {
    delete storage[name];
  }

  return storage;
}

// let jazbook = [
//  ['alex','301-844-3421'],
//  ['jae','301-844-1211'],
//  ['david','301-844-0978'],
//  ['travis','301-844-8505'],
//  ['jasmine','1800-974-4539'],
// ];

// console.log(findName(jazbook,'travis'));


const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
