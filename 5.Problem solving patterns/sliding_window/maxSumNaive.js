const maxSubArraySum = (array, num) => {
    if(num > array.length) return null
    let maxSum = -Infinity
    for(let i=0; i < array.length - num + 1; i++) {
        let tempSum = 0;
        for(j=0; j < num; j++) {
            tempSum += array[i+j] 
        }
        if(tempSum > maxSum) maxSum = tempSum
    }
    return maxSum
}

console.log("maxsum", maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))