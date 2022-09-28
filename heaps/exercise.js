// keep track of median in stream of numbers

// given integers 12,2,23,4,13

const { MinHeap, MaxHeap } = require('./lib')

function MedianHeap() {
  this.minHeap = new MinHeap()
  this.maxHeap = new MaxHeap()
}

MedianHeap.prototype.add = function (_value) {
  if (_value > this.median()) {
    this.minHeap.add(_value)
  } else {
    this.maxHeap.add(_value)
  }

  // Re balancing
  if (this.minHeap.size() - this.maxHeap.size() > 1) {
    this.maxHeap.add(this.minHeap.poll())
  }

  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.add(this.maxHeap.poll())
  }
}

MedianHeap.prototype.median = function () {
  if (this.minHeap.size() == 0 && this.maxHeap.size() == 0) {
    return Number.NEGATIVE_INFINITY
  } else if (this.minHeap.size() === this.maxHeap.size()) {
    console.log('this.minHeap.peek()', this.minHeap.peek())
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    return this.minHeap.peek()
  } else {
    return this.maxHeap.peek()
  }
}

const medianHeap = new MedianHeap()

medianHeap.add(12)
medianHeap.add(2)
console.log('median', medianHeap)
medianHeap.add(23)
medianHeap.add(13)
console.log('median', medianHeap.median())

const array1 = [12, 3, 13, 4, 2, 40, 23]

function getKthSmallestElement(array, k) {
  const minH = new MinHeap()
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    minH.add(array[i])
  }
  for (let i = 1; i < k; i++) {
    minH.poll()
  }
  return minH.poll()
}
console.log(
  'get Kth smallest Ele',
  getKthSmallestElement(array1, 2),
  getKthSmallestElement(array1, 1),
  getKthSmallestElement(array1, 7),
)
