function bubbleSort2(array) {
    for(let i=array.length; i > 0; i--) {
        for(let j=0; j < i - 1 ; j++) {
            if(array[j] > array[j+1]) {
                console.log("sub", array)
                array = swap(array, j, j+1)
            }
        }
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

console.log("bubbleSort", bubbleSort2([29, 10, 14, 30, 37, 14, 18]))