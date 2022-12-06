function mergeSort(array) {
    if(array.length <= 1) {
        return array
    }
    const mid = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))
    return merge(left, right)
}

function merge(array1, array2) {
    const newArray = []
    let i=0, j=0
    while(i<array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            newArray.push(array1[i]);
            i++;
        } else {
            newArray.push(array2[j]);
            j++;
        }
    }
    while(i < array1.length) {
        newArray.push(array1[i]);
        i++;
    }
    while(j < array2.length) {
        newArray.push(array2[j]);
        j++;
    }
    return newArray
}

const mergeArrays = mergeSort([1, 14, 10, 99, 100, 5, 2])
console.log("break array", mergeArrays)