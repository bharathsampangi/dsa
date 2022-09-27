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

console.log("maxsum", maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))