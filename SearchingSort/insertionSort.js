function insertionSort (_array) {
  const len = _array.length; let value; let i; let j
  for (i = 0; i < len; i++) {
    value = _array[i]
    for (j = i - 1; j > -1 && _array[j] > value; j--) {
      _array[j + 1] = _array[j]
    }
    _array[j + 1] = value
  }
  return _array
}

const newArr = [2, 5, 6, 1, 7, 3, 8, 4, 9]

console.log(insertionSort(newArr))
