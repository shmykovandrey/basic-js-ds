const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  ListNode
} = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]

*
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // console.log(l, k)
  let current = l;
  let prev = null;
  while (current.next) {
    if (current.value == k) {
      console.log('---time to delete');
      console.log('prev');
      console.log(prev);
      console.log('current');
      console.log(current);
      if (prev === null) {
        current.value = current.next.value;
        current.next = current.next.next;
      } else {
        // prev.value = current.next.value;
        prev.next = current.next;
        if (current.next.value == k) prev.next = current.next.next;
      }
      console.log('new list');
      console.log(l);
    }
    prev = current;
    current = current.next;
  }
  // console.log(prev)
  // console.log(current)

  if (current.value == k) {
    current = null;
    prev.next = null;
  }
  console.log(l)

  return l;

}

module.exports = {
  removeKFromList
};