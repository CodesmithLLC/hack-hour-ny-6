/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function deleteDuplicates(head) {
  let current = head;
  while (current != null && current.next != null) {
    if (current.next.val == current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

let l1 = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    }
  }
};

console.log(deleteDuplicates(l1));

// module.exports = deleteDups;
