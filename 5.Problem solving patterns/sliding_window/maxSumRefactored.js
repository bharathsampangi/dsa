const maxSubArraySum = (array, num) => {
    let maxSum = 0 
    let tempSum = 0
    for(let i=0; i < num; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum
    for(let k=num; k < array.length - 1; k++) {
        tempSum = tempSum - array[k - num] + array[k]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log("max sum", maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))