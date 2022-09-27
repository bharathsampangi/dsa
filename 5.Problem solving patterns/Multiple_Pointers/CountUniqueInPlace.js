const CountUniqueInPlace = (array) => {
    let unique = 0;
    let i=0
    for(let j=1; j < array.length; j++) {
        if(array[i] != array[j]) {
            i++
            array[i] = array[j]
        }
    }
    return i+1;
}

console.log("Unique", CountUniqueInPlace([1, 1, 1, 1, 1, 2]))