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



function deleteDups(head) {
  let currNode = head;
  let prevNode = head;
  let memo = {};

  while( head !== null ){
    if( memo[head.value] ){
      prevNode.next = head.next;
    } else {
    memo[head.value] = "visited";
    prevNode = JSON.parse(JSON.stringify(head));
    }
    head = head.next;
  }
}

module.exports = deleteDups;
