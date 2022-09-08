function selectionSort(_array) {
    let len = _array.length;
    let min
    for (let i = 0; i < len; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (_array[j] < _array[min]) {
                min = j
            }
        }
        if (i != min) {
            swap(_array, i, min)
        }
    }
    return _array
}

function swap(_arr, i, j) {
    let temp = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = temp
}


const newArr = [2, 5, 6, 1, 7, 3, 8, 4, 9]

console.log(selectionSort(newArr))