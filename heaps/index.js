const { MinHeap, MaxHeap } = require('./lib')

const _newArr = [9, 8, 7, 6, 5, 45, 456, 103, 0, 1]

const newMinHeap = new MinHeap()

newMinHeap.addArr(_newArr)
newMinHeap.add(10)
newMinHeap.add(9)
newMinHeap.add(8)
newMinHeap.add(80)
newMinHeap.add(70)
newMinHeap.add(100)

console.log('poll', newMinHeap.poll()) // 0
console.log('poll', newMinHeap.poll()) // 1

console.log('minHeap', newMinHeap.items) // [0, 1, 8, 6, 5, 45, 456, 103, 9, 7]

const maxHeap = new MaxHeap()
maxHeap.add(12)
maxHeap.add(2)
maxHeap.add(23)
maxHeap.add(4)
maxHeap.add(13)
console.log('maxHeap', maxHeap.items) // [23, 13, 12, 2, 4]

console.log('maxHeap.poll', maxHeap.poll()) // 23
console.log('maxHeap.poll', maxHeap.poll()) // 13

// console.log(maxHeap.poll()) // 13
// console.log(maxHeap.poll()) // 12
// console.log(maxHeap.poll()) // 2
// console.log(maxHeap.poll()) // 4
