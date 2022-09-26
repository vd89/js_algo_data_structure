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
