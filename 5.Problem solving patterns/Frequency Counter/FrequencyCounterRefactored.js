function FrequencyCounterRefactored(array1, array2) {
    let frequency1={}, frequency2 = {}
    for(let i of array1) {
        frequency1[i] = (frequency1[i] || 0) + 1
    } 
    for(let j of array2) {
        frequency2[j] = (frequency2[j] || 0) + 1
    }
    console.log("frequency array", frequency1, frequency2)
    for(let i in frequency1) {
        if(!frequency2[i**2]) {
            return false
        }
    }
    for(let i in frequency1) {
        if(frequency1[i] != frequency2[i**2]) {
            return false
        }
    }
    return true
}

console.log(FrequencyCounterRefactored([1, 2, 3], [1, 4, 9]))