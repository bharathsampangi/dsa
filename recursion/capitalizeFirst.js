const capitalizeFirst = (array) => {
    console.log("array", array)
    if(array.length <= 0) return array
    return [].concat(array[0].charAt(0).toUpperCase() + array[0].slice(1) , capitalizeFirst(array.slice(1)))
}

console.log("capitalizeFirst", capitalizeFirst(['cal', 'taco', 'banana']))