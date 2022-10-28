const capitalizeWords = (array) => {
    const cap = []
    function capitalize(array) {
        if(array.length <= 0)
            return
        cap.push(array[0].toUpperCase())
        return capitalize(array.slice(1))
    }
    capitalize(array)
    return cap
}

console.log("capitalizeWords", capitalizeWords(['i', 'am', 'learning', 'recursion']))