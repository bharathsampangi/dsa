// There is a frog on the '1st' step of an 'N' stairs long staircase. The frog wants to reach the 'Nth' stair. 
// 'HEIGHT[i]' is the height of the '(i+1)th' stair.If Frog jumps from 'ith' to 'jth' stair, the energy 
// lost in the jump is given by absolute value of ( HEIGHT[i-1] - HEIGHT[j-1] ). If the Frog is on 'ith' 
// staircase, he can jump either to '(i+1)th' stair or to '(i+2)th' stair. Your task is to 
// find the minimum total energy used by the frog to reach from '1st' stair to 'Nth' stair.

// For Example
// If the given ‘HEIGHT’ array is [10,20,30,10], the answer 20 as the frog can jump from 1st stair to 2nd stair 
// (|20-10| = 10 energy lost) and then a jump from 2nd stair to last stair (|10-20| = 10 energy lost). 
// So, the total energy lost is 20.

// recursion
// function jump(idx, heights, dp) {
//     if(idx === 0) return 0

//     if(dp[idx - 1]) {
//         return dp[idx - 1]
//     }

//     let left = jump(idx - 1, heights, dp) + Math.abs(heights[idx] - heights[idx-1])
//     let right = Infinity
//     if(idx > 1) {
//         right = jump(idx - 2, heights, dp) + Math.abs(heights[idx] - heights[idx - 2])
//     }

//     dp[idx] = Math.min(left, right)
//     return dp[idx]
// }

// function frogJump(n, heights) {
//     const dp = []
//     return jump(n-1, heights, dp)
// }

function frogJump(n, heights) {
    let prev = 0, prev2 = 0, curr = 0
    for(let i=1; i < n; i++) {
        let left = prev + Math.abs(heights[i] - heights[i-1])
        let right = Infinity
        if(i > 1) {
            right = prev2 + Math.abs(heights[i] - heights[i-2])
        }

        curr = Math.min(left, right)
        prev2 = prev
        prev = curr
    }

    return prev
}

const array = [10, 20, 30, 10]
console.log(frogJump(4, array))