function isSquared(array1, array2) {
    if(array1.length != array2.length)
        return false
    for(let i of array1) {
        let found = false
        for(let j of array2) {
            if(i**2 === j){
                found = true
            }
        }
        if(!found)
            return false
    }
    return true
}

const result = isSquared([1, 2, 3], [1, 4, 9])
console.log("result", result)