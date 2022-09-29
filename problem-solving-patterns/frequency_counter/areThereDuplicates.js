const areThereDuplicates = (...args) => {
    let frequency = {}
    for(let i of args) {
        frequency[i] = (frequency[i] || 0) + 1
    }
    for(let k in frequency) {
        if(frequency[k] > 1) {
            return false
        }
    }
    return true
}

console.log("areThereDuplicates", areThereDuplicates('a', 'b', 'c', 'a'))