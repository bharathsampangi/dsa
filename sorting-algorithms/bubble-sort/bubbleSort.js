function bubbleSort(array) {
    for(let i=0; i< array.length; i++) {
        for(let j=i; j < array.length; j++) {
            if(array[i] > array[j])
                array = swap(array, i, j)
        }
        console.log("iter", array)
    }
    return array
}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}

console.log("bubbleSort", bubbleSort([29, 10, 14, 30, 37, 14, 18]))