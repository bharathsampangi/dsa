function bubbleSort(array) {
    let noSwaps
    for(let i=array.length; i > 0; i--) {
        noSwaps = true
        for(let j=0; j < i - 1 ; j++) {
            if(array[j] > array[j+1]) {
                array = swap(array, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break
        console.log("array", array)
    }
    return array
}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}

console.log("bubbleSort", bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))