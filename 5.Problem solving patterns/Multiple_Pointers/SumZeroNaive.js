const sumZero = (array) => {
    for(let i=0; i < array.length - 1; i++) {
        for(let j=i+1; j < array.length - 1; j++) {
            if((array[i] + array[j]) === 0) {
                return [array[i], array[j]]
            }
        }
    }
    return false
}

console.log("sumZero", sumZero([-4, -3, -2, -1, 0, 4, 10]))