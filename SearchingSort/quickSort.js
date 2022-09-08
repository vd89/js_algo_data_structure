function quickSort(_arr) {
    return quickSortHelper(_arr, 0, _arr.length - 1)
}
function quickSortHelper(_arr, left, right) {
    let index;
    if (_arr.length > 1) {
        index = partition(_arr, left, right)
        if (left < index - 1) {
            quickSortHelper(_arr, left, index - 1)
        }
        if (index < right) {
            quickSortHelper(_arr, index, right)
        }
    }
    return _arr
}

function partition(_arr, left, right) {
    let pivot = _arr[Math.floor((right + left) / 2)]
    while (left <= right) {
        while (pivot > _arr[left]) {
            left++
        }
        while (pivot < _arr[right]) {
            right--
        }
        if (left <= right) {
            let temp = _arr[left]
            _arr[left] = _arr[right]
            _arr[right] = temp
            left++
            right--
        }
    }
    return left
}


const newArr = [2, 5, 6, 1, 7, 3, 8, 4, 9]

console.log(quickSort(newArr))