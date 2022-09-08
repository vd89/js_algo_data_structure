function merge(leftA, rightA) {
  let result = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      result.push(leftA[leftIndex++])
    } else {
      result.push(rightA[rightIndex++])
    }
  }
  let leftRemains = leftA.slice(leftIndex)
  let rightRemains = rightA.slice(rightIndex)

  return result.concat(leftRemains).concat(rightRemains)
}


function mergeSort(_arr) {
  if (_arr.length < 2) {
    return _arr
  };
  let minPoint = Math.floor((_arr.length) / 2);
  let leftArr = _arr.slice(0, minPoint);
  let rightArr = _arr.slice(minPoint);
  return merge(mergeSort(leftArr), mergeSort(rightArr))
};

console.log(mergeSort([6, 1, 2, 5, 3, 4, 7, 0, 9, 23]))