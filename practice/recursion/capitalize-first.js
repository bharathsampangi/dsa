// capitalizeFirst
// Write a function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
    let result = []

    if(!array.length)
        return result

    result.push(array[0][0].toUpperCase() + array[0].slice(1))

    return result.concat(capitalizeFirst(array.slice(1)))
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']