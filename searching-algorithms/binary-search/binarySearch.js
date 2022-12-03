function binarySearch(array, start, end, key) {
    if(array.length < 0 || start > end)
        return -1
    let mid = Math.floor((start + end) / 2)
    // console.log("mid", start, mid, end, key)
    if(array[mid] === key) return mid
    else if(key < array[mid])
        return binarySearch(array, start, mid -1, key)
    else 
        return binarySearch(array, mid + 1, end, key)
}

function binarySearchHelper(array, key) {
    return binarySearch(array, 0, array.length - 1, key)
}

const result = binarySearchHelper([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 29)
console.log(result)