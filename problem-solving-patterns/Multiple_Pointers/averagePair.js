const averagePair = (array, targetSum) => {
    if(array.length < 1) return false
    let i=0, j = array.length - 1
    while(i < j) {
        if((array[i] + array[j]) == targetSum) {
            return true
        }
        else if((array[i] + array[j]) > targetSum) {
            j--
        }
        else {
            i++
        }
    }
    return false
}

console.log("Hello")
console.log("average pair", averagePair([-1, 0, 3, 4, 5, 6], 4))