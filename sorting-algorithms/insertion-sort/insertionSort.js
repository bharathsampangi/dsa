function insertionSort(array) {
    for(let i=1; i < array.length; i++) {
        for(j=i; j >= 0; j--) {
            if(array[j] < array[j-1]) {
                array = swap(array, j, j-1)
            }
        }
    }
    return array
}

function swap(array, idx1, idx2) {
    let temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp
    return array
}

console.log("insertion sort", insertionSort([3, 44, 38, 5, 47, 15]))