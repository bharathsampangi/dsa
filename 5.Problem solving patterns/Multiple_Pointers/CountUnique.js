const CountUnique = (array) => {
    let uniqueCount = 1
    let a=0;
    for(let b=1; b <= array.length - 1; b++) {
        if(array[a] != array[b]) {
            uniqueCount++
            a = b
        }
    }
    return uniqueCount
}

console.log("count unique", CountUnique([1, 1, 1, 1, 1, 2]))