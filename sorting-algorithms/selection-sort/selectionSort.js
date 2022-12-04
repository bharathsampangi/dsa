function selectionSort(array) {
    const swap = (array, idx1, idx2) => ([array[idx1], array[idx2]] = [array[idx2], array[idx1]])

    let smallest
    for(let i=0; i < array.length; i++) {
        smallest = i
        for(let j=i+1; j < array.length; j++) {
            if(array[j] < array[smallest])
                smallest = j
        }
        if(smallest !== i)
            swap(array, smallest, i)
    }
    return array
}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}

console.log("selection sort", selectionSort([29, 10, 14, 30, 37, 14, 18]))