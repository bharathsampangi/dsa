const flattenArray = (array) => {
    const resultArr = []
    const flatten = (array) => {
        for(let item of array) {
            if(item instanceof Array) 
                resultArr.concat(flatten(item))
            else 
                resultArr.push(item)
        }
    }
    flatten(array)
    return resultArr
}

console.log("flatten", flattenArray([1, 2, 3, [4, 5]]))