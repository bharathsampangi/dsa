// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

const minSubArrayLen = (arr, minSum) => {
    let sum = 0;
    let minLength = 0
    let tempLength = 0

    while(sum < minSum && tempLength < arr.length) {
        sum = sum + arr[tempLength]
        tempLength++
    }

    if(sum < minSum)
        return 0

    minLength = tempLength
    let i = 0

    while(i + tempLength - 1 < arr.length) {
        if(sum >= minSum) {
            minLength = Math.min(tempLength, minLength)
            sum = sum - arr[i]
            i++
            tempLength--
        } else {
            sum = sum + arr[i+tempLength]
            tempLength++
        }
    }

    return minLength
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
