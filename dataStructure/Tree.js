class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    console.log(this.data);
  }
}

class Tree{
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    }

    let prarent = this.root;
    let current = this.root;

    while(current) {
      prarent = current;
      if (data < current.data) {
        current = current.left;
        if(!current) {
          prarent.left = node;
        }
      } else {
        current = current.right;
        if(!current) {
          prarent.right = node;
        }
      }
    }
  }

  preOrder(node) {
    if (node !== null) {
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      node.show();
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      node.show();
    }
  }

  getMin() {
    let current = this.root;
    while(current.left) {
      current = current.left;
    }
    return current.data;
  }

  getMax() {
    let current = this.root;
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }

  getDepth(node) {
    if (node === null) {
      return 0;
    }
    return Math.max(this.getDepth(node.left), this.getDepth(node.right)) + 1;
  }

  getNode(data) {
    let current = this.root;
    while(current) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    let current = this.root;
    let prarent = this.root;
    let isLeftChild = true;

    while(current.data !== data) {
      prarent = current;
      if (data < current.data) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      if (current === null) {
        return false;
      }
    }

    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        prarent.left = null;
      } else {
        prarent.right = null;
      }
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        prarent.left = current.left;
      } else {
        prarent.right = current.left;
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        prarent.left = current.right;
      } else {
        prarent.right = current.right;
      }
    } else {
      let successor = this.getNode(current);
      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        prarent.left = successor;
      } else {
        prarent.right = successor;
      }
      successor.left = current.left;
    }
  }
}

var t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
// t.middleOrder(t.root);
console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5,t.root));