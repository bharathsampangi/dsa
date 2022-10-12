const collectOddsPureRecursion = (array) => {
    let newArr = []
    if(array.length === 0) {
        return newArr
    }
    if(array[0] % 2 != 0) {
        newArr.push(array[0])
    }
    return newArr.concat(collectOddsPureRecursion(array.slice(1)))
}

console.log("collect odds pure recursion", collectOddsPureRecursion([1, 2, 3, 4 , 5]))