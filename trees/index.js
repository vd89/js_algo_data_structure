//       42
//    41      50
// 10    40  45   75

const { BinarySearchTree } = require('./lib')

const binaryTree = new BinarySearchTree()
const _newArr = [42, 41, 10, 40, 50, 45, 75]
binaryTree.insertArr(_newArr)
binaryTree.findNode(42)
binaryTree.findNode(6)

console.log('42', binaryTree.findNode(42))

binaryTree.remove(15)
console.log('15', binaryTree.findNode(15))

// Breath first search
// const viewNodes = binaryTree.traverseLevelOrder()

// console.log(viewNodes)

console.log('pre-order', binaryTree.traversePreOrder()) // 10 5 2 7 13 11 16
console.log('traverseInOrder', binaryTree.traverseInOrderIterative())
