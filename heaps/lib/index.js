function Heap() {
  this.items = new Array(0)
}

Heap.prototype.swap = function (_index1, _index2) {
  const _temp = this.items[_index1]
  this.items[_index1] = this.items[_index2]
  this.items[_index2] = _temp
}
Heap.prototype.parentIndex = function (_index) {
  return Math.floor((_index - 1) / 2)
}
Heap.prototype.leftChildIndex = function (_index) {
  return _index * 2 + 1
}
Heap.prototype.rightChildIndex = function (_index) {
  return _index * 2 + 2
}
Heap.prototype.parent = function (_index) {
  return this.items[this.parentIndex(_index)]
}
Heap.prototype.leftChild = function (_index) {
  return this.items[this.leftChildIndex(_index)]
}
Heap.prototype.rightChild = function (_index) {
  return this.items[this.rightChildIndex(_index)]
}
Heap.prototype.peek = function (_item) {
  return this.items[0]
}
Heap.prototype.size = function () {
  return this.items.length
}
//  min-heap

function MinHeap() {
  this.items = new Array(0)
}
// Inherit helpers from Heap by copying prototypes
MinHeap.prototype = Object.create(Heap.prototype)

MinHeap.prototype.bubbleDown = function () {
  let index = 0
  while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    let smallerIndex = this.leftChildIndex(index)
    if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
      // if right is smaller, right swaps
      smallerIndex = this.rightChildIndex(index)
    }
    this.swap(smallerIndex, index)
    index = smallerIndex
  }
}

MinHeap.prototype.bubbleUp = function () {
  let index = this.items.length - 1
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index)
    index = this.parentIndex(index)
  }
}
MinHeap.prototype.add = function (_item) {
  this.items[this.items.length] = _item
  this.bubbleUp()
}

MinHeap.prototype.addArr = function (_arr) {
  for (const _item of _arr) {
    this.add(_item)
  }
}
MinHeap.prototype.poll = function () {
  const _item = this.items[0]
  this.items[0] = this.items[this.items.length - 1]
  this.items.pop()
  this.bubbleDown()
  return _item
}

function MaxHeap() {
  this.items = new Array(0)
}
// Inherit helpers from Heap by copying prototypes

MaxHeap.prototype = Object.create(Heap.prototype)

MaxHeap.prototype.bubbleDown = function () {
  let _index = 0
  while (
    (this.leftChild(_index) && this.leftChild(_index) > this.items[_index]) ||
    this.rightChild(_index) > this.items[_index]
  ) {
    let _biggerIndex = this.leftChildIndex(_index)
    if (this.rightChild(_index) && this.rightChild(_index) > this.items[_biggerIndex]) {
      _biggerIndex = this.rightChildIndex(_index)
    }
    this.swap(_biggerIndex, _index)
    _index = _biggerIndex
  }
}

MaxHeap.prototype.bubbleUp = function () {
  let _index = this.items.length - 1
  while (this.parent(_index) && this.parent(_index) < this.items[_index]) {
    this.swap(this.parentIndex(_index), _index)
    _index = this.parentIndex(_index)
  }
}
MaxHeap.prototype.add = function (_item) {
  this.items[this.items.length] = _item
  this.bubbleUp()
}

MaxHeap.prototype.poll = function () {
  const _item = this.items[0]
  this.items[0] = this.items[this.items.length - 1]
  this.items.pop()
  this.bubbleDown()
  return _item
}
module.exports = { Heap, MinHeap, MaxHeap }
