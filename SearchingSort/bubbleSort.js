function bubbleSort (_arr) {
  const arrLength = _arr.length
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j <= i; j++) {
      if (_arr[i] < _arr[j]) {
        swap(_arr, i, j)
      }
    }
  }
  return _arr
}

function swap (_arr, i, j) {
  const temp = _arr[i]
  _arr[i] = _arr[j]
  _arr[j] = temp
}

const newArr = [2, 5, 6, 1, 7, 3, 8, 4, 9]

console.log(bubbleSort(newArr))
