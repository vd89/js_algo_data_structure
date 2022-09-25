function merge (leftA, rightA) {
  const result = []; let leftIndex = 0; let rightIndex = 0
  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      result.push(leftA[leftIndex++])
    } else {
      result.push(rightA[rightIndex++])
    }
  }
  const leftRemains = leftA.slice(leftIndex)
  const rightRemains = rightA.slice(rightIndex)

  return result.concat(leftRemains).concat(rightRemains)
}

function mergeSort (_arr) {
  if (_arr.length < 2) {
    return _arr
  };
  const minPoint = Math.floor((_arr.length) / 2)
  const leftArr = _arr.slice(0, minPoint)
  const rightArr = _arr.slice(minPoint)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
};

console.log(mergeSort([6, 1, 2, 5, 3, 4, 7, 0, 9, 23]))
