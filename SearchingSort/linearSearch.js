function linearSearch(_arr, n) {
    for (let ele of _arr) {
        if (ele === n) {
            return true
        }
    }
    return false
}
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9], num = 6
console.log(linearSearch(newArr, num))