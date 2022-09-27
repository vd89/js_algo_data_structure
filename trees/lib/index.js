// function TreeNode (_value) {
//   this.value = _value
//   this.children = new Array()
// }

function BinaryTreeNode (_value) {
  this.value = _value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
  this._root = null
}

// Breath first search
BinarySearchTree.prototype.traverseLevelOrder = function () {
  const root = this._root
  const queue = new Array(0)
  if (!root) {
    return queue
  }
  queue.push(root)
  while (queue.length) {
    const temp = queue.shift()
    console.log(temp.value)
    if (temp.left) {
      queue.push(temp.left)
    }
    if (temp.right) {
      queue.push(temp.right)
    }
  }
}

// pre-order traversal
// recursive
BinarySearchTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root)
  function traversePreOrderHelper (node) {
    if (!node) {
      return null
    }
    console.log(node.value)
    traversePreOrderHelper(node.left)
    traversePreOrderHelper(node.right)
  }
}

BinarySearchTree.prototype.traversePreOrderIterative = function () {
  const nodeStack = new Array(0)
  nodeStack.push(this._root)
  while (nodeStack.length) {
    const node = nodeStack.pop()
    if (node.right) {
      nodeStack.push(node.right)
    }
    if (node.left) {
      nodeStack.push(node.left)
    }
    console.log(node.value)
  }
  return nodeStack
}

// in-order traverse
BinarySearchTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root)
  function traverseInOrderHelper (node) {
    if (!node) return null
    traverseInOrderHelper(node.left)
    console.log(node.value)
    traverseInOrderHelper(node.right)
  }
}
BinarySearchTree.prototype.traverseInOrderIterative = function () {
  let current = this._root
  const stack = new Array(0)
  let done = false

  while (!done) {
    if (current !== null) {
      stack.push(current)
      // console.log(current.value)
      current = current.left
    } else {
      if (stack.length) {
        current = stack.pop()
        console.log(current.value)
        current = current.right
      } else {
        done = true
      }
    }
  }
}

// post-order
BinarySearchTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root)

  function traversePostOrderHelper (node) {
    if (node.left) { traversePostOrderHelper(node.left) }
    if (node.right) { traversePostOrderHelper(node.right) }
    console.log(node.value)
  }
}

BinarySearchTree.prototype.traversePostOrderIterative = function () {
  // Create two stacks
  const s1 = new Array(0)
  const s2 = new Array(0)

  // Push root to first stack
  s1.push(this._root)

  // # Run while first stack is not empty
  while (s1.length) {
    // Pop an item from s1 and append it to s2
    const node = s1.pop()
    s2.push(node)

    // Push left and right children of removed item to s1
    if (node.left) { s1.push(node.left) }
    if (node.right) { s1.push(node.right) }
  }
  // Print all eleements of second stack
  while (s2.length) {
    const node = s2.pop()
    console.log(node.value)
  }
}

// insert the value
BinarySearchTree.prototype.insert = function (_value) {
  const newNode = new BinaryTreeNode(_value)
  if (!this._root) {
    this._root = newNode
    return this
  } else {
    let _currentRoot = this._root
    while (true) {
      if (_currentRoot.value > _value) {
        if (_currentRoot.left !== null) {
          _currentRoot = _currentRoot.left
        } else {
          _currentRoot.left = newNode
          break
        }
      } else if (_currentRoot.value < _value) {
        if (_currentRoot.right !== null) {
          _currentRoot = _currentRoot.right
        } else {
          _currentRoot.right = newNode
          break
        }
      } else {
        break
      }
    }
  }
}
// insert the array
BinarySearchTree.prototype.insertArr = function (_arr) {
  for (const _item of _arr) {
    this.insert(_item)
  }
}

// see all nodes
BinarySearchTree.prototype.findAll = function () {
  return this._root
}
// find one value from the nodes
BinarySearchTree.prototype.findNode = function (_value) {
  let _currentRoot = this._root
  let _found = false
  while (_currentRoot) {
    if (_currentRoot.value > _value) {
      _currentRoot = _currentRoot.left
    } else if (_currentRoot.value < _value) {
      _currentRoot = _currentRoot.right
    } else {
      _found = true
      break
    }
  }
  return _found
}

// remove the node
BinarySearchTree.prototype.remove = function (_value) {
  return deleteRecursively(this._root, _value)

  function deleteRecursively (root, value) {
    if (!root) return null
    if (value < root.value) {
      root.left = deleteRecursively(root.left, value)
    } else if (value > root.value) {
      root.right = deleteRecursively(root.right, value)
    } else {
      if (!root.left && !root.right) {
        return null // case 1
      } else if (!root.left) {
        root = root.right // case 2
        return root
      } if (!root.right) {
        root = root.left
        return root
      } else {
        const temp = findMin(root.right)
        root.value = temp.value
        root.right = deleteRecursively(root.right, temp.value)
        return root
      }
    }
    return root
  }

  function findMin (root) {
    while (root.left) {
      root = root.left
    }
    return root
  }
}

// AVL trees

function AVLTree (_value) {
  this.left = null
  this.right = null
  this.value = _value
  this.depth = 1
}

// Set the depth on based Children
// AVLTree.prototype.setDepthBasedOnChildren = function () {
//  if (this.node) {

//  } else {

//  }
// }

module.exports = { AVLTree, BinarySearchTree }
