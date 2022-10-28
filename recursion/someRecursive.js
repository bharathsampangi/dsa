const someRecursive = (array, func) => {
    if(array.length <= 0) return false
    if(func(array[0]))
        return true
    return someRecursive(array.slice(1), func)
}

console.log("someRecursive", someRecursive([4, 6, 8], val => val % 2 !== 0))