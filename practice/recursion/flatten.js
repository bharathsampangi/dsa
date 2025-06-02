// flatten
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

const flatten =  (arr) => {
    let result = []

    if(!arr.length)
        return result

    for(let i=0; i < arr.length; i++) {
        if(typeof arr[i] === "object") {
            result = [...result, ...flatten(arr[i])]
        } else {
            result.push(arr[i])
        }
    }

    return result
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
