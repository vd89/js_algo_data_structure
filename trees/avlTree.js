const { AVLTree } = require('./lib')

const newAvlTree = new AVLTree(1, '')
const _newArr = [2, 3, 4, 5, 123, 203, 2222]

newAvlTree.insertArr(_newArr)
newAvlTree.balance()

console.log(newAvlTree)
