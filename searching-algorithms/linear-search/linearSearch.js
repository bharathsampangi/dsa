function linearSearch(array, value) {
    for(let i=0; i<array.length - 1; i++) {
        if(array[i] === value)
            return i;
    }
    return -1;
}

const result = linearSearch([1, 5, 21, 6, 63], 6)
console.warn(result)