// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

// function averagePair(array, target) {
//     if(!array.length)
//         return false
//     if(array.length == 1)
//         return target == array[0]
//     let auxSum = array[0] + array[1]
//     if(auxSum === target)
//         return true

//     for(let i=2; i < array.length; i++) {
//         auxSum = auxSum + array[i] - array[i - 2]
//         if(target == auxSum)
//             return true
//     }

//     return false
// }

function averagePair(array, target) {
    if(!array.length) return false

    let left = 0;
    let right = array.length - 1

    while(left < right) {
        let avg = (array[left] + array[right]) / 2
        if(avg === target) return true
        if(avg > target) right--
        else left++
    }

    return false
}
  
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false