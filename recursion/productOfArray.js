const productOfArray = (array) => {
    if(array.length == 0) return 1
    return array[0] * productOfArray(array.slice(1))
}

console.log("product of array", productOfArray([1, 2, 3, 10]))