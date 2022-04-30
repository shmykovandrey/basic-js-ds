const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }
  root() {
    return this.rootElem;
  }
  add(data) {
    if (this.rootElem == null) {
      this.rootElem = new Node(data);
    } else {
      findPlace(this.rootElem, data);

      function findPlace(node, data) {
        // console.log(node, data)
        if (node == null) {
          return new Node(data);
        }
        if (node.data == data) {
          return node;
        }
        if (node.data > data) {
          // console.log('levaya vetka ' + node.data + '  ' + data);
          node.left = findPlace(node.left, data);
        } else {
          // console.log('pravaya vetka');
          node.right = findPlace(node.right, data);
        }
        return node;
      }
    }
  }

  has(data) {
    let current = this.rootElem;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      if (current.data < data) {
        current = current.right;
      } else current = current.left;
    }
    return false;
  }

  find(data) {
    let current = this.rootElem;
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      if (current.data < data) {
        current = current.right;
      } else current = current.left;
    }
    return null;
  }


  remove(data) {
    // this.rootElem = null;
    this.rootElem = deleteElem(this.rootElem, data);

    function deleteElem(elem, data) {
      if (elem === null) return null;
      if (data < elem.data) {
        elem.left = deleteElem(elem.left, data)
        return elem;
      } else if (elem.data < data) {
        elem.right = deleteElem(elem.right, data)
        return elem;
      } else {
        if (elem.right == null && elem.left == null) {
          return null;
        }
      }
      if (elem.right === null) {
        elem = elem.left;
        return elem
      }
      if (elem.left === null) {
        elem = elem.right;
        return elem;
      }

      let min = elem.right;
      while (min.left) {
        min = min.left;
      }
      elem.data = min.data;
      elem.right = deleteElem(elem.right, min.data);
      return elem;
    }
  }

  min() {
    let current = this.rootElem;
    if (current === null) {
      // console.log(null);
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    // console.log(current.data);
    return current.data;
  }

  max() {
    let current = this.rootElem;
    if (current === null) {
      console.log(null);
      return null;
    }
    while (current.right !== null) {
      current = current.right;
    }
    console.log(current.data);
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};