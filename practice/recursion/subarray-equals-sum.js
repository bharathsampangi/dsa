// function SubArraySumEqualsK(arr, k) {
//     function calc(idx, seq, sum, result) {
//         if(idx === arr.length) {
//             if(sum === k) {
//                 console.log("res", seq)
//                 result.push(seq)
//             }
//             return;
//         }
    
//         seq.push(arr[idx])
//         calc(idx+1, seq, sum + arr[idx], result)
//         seq.pop()
//         calc(idx+1, seq, sum, result)
//     }

//     calc(0, [], 0, [])
// }

// SubArraySumEqualsK([1, 2, 1], 2)

function calcSubarray(idx, seq, sum, arr, k) {
    if(idx === arr.length) {
        if(sum === k) {
            console.log(seq)
            return true
        }
        return false
    }

    seq.push(arr[idx])
    if(calcSubarray(idx+1, seq, sum + arr[idx], arr, k) === true) {
        return true
    }

    seq.pop()
    if(calcSubarray(idx+1, seq, sum, arr, k) === true) {
        return true
    }

    return false
}

function printOneSubarraySumEqualsK(arr, k) {
    return calcSubarray(0, [], 0, arr, k)
}

console.log(printOneSubarraySumEqualsK([1,2,1], 2))