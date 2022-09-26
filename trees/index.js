//       10
//    5      13
// 2    7  11   16

const { BinarySearchTree } = require('./lib')

const binaryTree = new BinarySearchTree()
const _newArr = [10, 5, 2, 7, 13, 11, 15, 16]
binaryTree.insertArr(_newArr)
binaryTree.findNode(15)
binaryTree.findNode(6)

console.log('6', binaryTree.findNode(6))

binaryTree.remove(15)
console.log('15', binaryTree.findNode(15))
const viewNodes = binaryTree.traverseLevelOrder()
console.log(viewNodes)
