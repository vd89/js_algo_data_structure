const newArr = [1,3,3,-2,-3,4,14,19,7,8,-9,19]


function partition(_arr,left,right) {
    let pivot = _arr[Math.floor((right + left)/2)]
    while(left <= right){
        while(pivot > _arr[left]){
            left++
        }
        while(pivot < _arr[right]){
            right--
        }
        if(left <= right){
            let temp = _arr[left]
            _arr[left] = _arr[right]
            _arr[right] = temp
            left++
            right--
        }
    }
    return left
}

function quickSelectInPlace(_arr,left, end, k) {
    let p = partition(_arr,left,end);
    if(p == (k-1)){
        return _arr[p]
    }else if(p > (k-1)){
        return quickSelectInPlace(_arr,left,p-1,k)
    }else{
        return quickSelectInPlace(_arr,p+1, end, k)
    }
}
function medianQuickSelected(_arr) {
    return quickSelectInPlace(_arr,0,_arr.length-1, 7)
}

console.log(medianQuickSelected(newArr))