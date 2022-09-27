const SumZeroRefactored = (array) => {
    let first = 0
    let last = array.length - 1
    while(first < last) {
        let sum = array[first] + array[last]
        if(sum == 0) {
            return [array[first], array[last]]
        }
        else if(sum > 0) {
            last--
        } else {
            first++
        }
    }
    return false
}

console.log("sumzero", SumZeroRefactored([-4, -3, -2, -1, 0, 5, 10]))