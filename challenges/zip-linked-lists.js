/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {


  // REWROTE THE FOUND FUNCTION TO GO TO EVERY OTHER
  let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
  let runner = mergedLinkedListHead;
  let count = 0;

  while(l1 && l2) {
      if(count % 2 === 0) {
          runner.next = l2;
          l2 = l2.next;
      } else {
          runner.next = l1;
          l1 = l1.next;
      }
      runner = runner.next;
      count++
  }

  runner.next = l1 || l2;

  return mergedLinkedListHead.next;

  // FOUND THIS ANSWER ONLINE
  // let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
  // let runner = mergedLinkedListHead;

  // while(l1 && l2) {
  //     if(l1.val > l2.val) {
  //         runner.next = l2;
  //         l2 = l2.next;
  //     } else {
  //         runner.next = l1;
  //         l1 = l1.next;
  //     }
  //     runner = runner.next;
  // }

  // runner.next = l1 || l2;

  // return mergedLinkedListHead.next;





// TRY THREE
//   let count = 0;
//   let l3 = {};
//   l3['val'] = l1.val;
//   l3['next'] = l2;
//   l3 = l3.next
//   console.log(l3)
//   console.log(l1)
//   while(l1.next || l2.next) {
//     if(count % 2 === 0) {
//       // l3.val = l2.val;
//       // l3.next = l1;
//       l2 = l2.next
//     }
//     if(count % 2 === 1) {
//       // l3.val = l1.val;
//       // l3.next = l2;
//       l1 = l1.next;
//     }
//     // l3 = l3.next;
//     count++
//   }
// console.log(l3)



// SECOND TRY
//   l3 = {};
//   let count = 0;
//   let copy = l1;
//   while(copy.next !== null) {
//     copy = copy.next
//     count++
//   }
//   // console.log(l2)
//   // l2 = l2.next;
//   // console.log(l2)
//   // l2 = l2.next;
//   console.log(l2)
//   console.log(l1)
//   for(let i = 0; i <= count * 2; i++) {
//     if(i % 2 === 0) {
//       l3['val'] = l1.val;  
//       l3['next'] = l2.next;
//       // console.log('inside l1 ',l2)
//       l1 = l1.next;
//     }
//     if(i % 2 === 1) {
//       // console.log('inside l2 ',l2)
//       l3['val'] = l2.val;  
//       l3['next'] =  l1.next;
//       l2 = l2.next;
//     }
//     // console.log(l3)
//     l3 = l3.next;
//   }
// };


// FIRST TRY
// let count = 0;
// l3 = {};
// // console.log(l1)
// // l1 = l1.next
// // console.log(l1)
// // l1 = l1.next
// // console.log(l1)
// // console.log(l2)
// while(count < 5){
//   // console.log(l1)
//   // console.log(l2)
//   if(count % 2 === 0) {
//     l3['val'] = l1.val;  
//     l3['next'] = l2.next;
//     l1 = l1.next;
//   }
//   if(count % 2 === 1) {
//     l3['val'] = l2.val;  
//     l3['next'] =  l1.next;
//     l2 = l2.next;
//   }
//   l3 = l3.next;
//   console.log(l3)
//   count++
}


// let a = {
//   val: 4,
//   next: {
//     val: 5,
//     next: {
//       val: 6,
//       next: null
//     }
//   }
// };

// let b = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: null
//     }
//   }
// }
// zip(a,b)
module.exports = {Node: Node, zip: zip};