// capitalizeWords
// Write a function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(array) {
    let result = []

    if(!array.length)
        return result

    result.push(array[0].toUpperCase())

    return result.concat(capitalizeWords(array.slice(1)))
}

const words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']