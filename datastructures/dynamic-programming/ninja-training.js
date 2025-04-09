// Ninja is planing this ‘N’ days-long training schedule. 
// Each day, he can perform any one of these three activities. (Running, Fighting Practice or Learning New Moves). 
// Each activity has some merit points on each day. As Ninja has to improve all his skills, 
// he can’t do the same activity in two consecutive days. 
// Can you help Ninja find out the maximum merit points Ninja can earn?

// You are given a 2D array of size N*3 ‘POINTS’ with the points corresponding to each day and activity. 
// Your task is to calculate the maximum number of merit points that Ninja can earn.

// For Example
// If the given ‘POINTS’ array is [[1,2,5], [3 ,1 ,1] ,[3,3,3] ],the answer will be 11 as 5 + 3 + 3.

function calc(day, last, points, dp) {
    if(day == 0) {
        let maxi = 0
        for(let i=0; i < 3; i++) {
            if(last !== i) {
                maxi = Math.max(maxi, points[day][i])
            }
        }
        return maxi
    }

    if(dp[day][last]) {
        return dp[day][last]
    }

    let maxi = 0
    for(let i=0; i<3; i++) {
        if(last !== i) {
            let point = points[day][i] + calc(day-1, i, points, dp)
            maxi = Math.max(maxi, point)
        }
    }
    dp[day][last] = maxi
    return maxi
}

function ninjaTraining(n, points) {
    // Write your code here.
    const dp = Array.from(Array(n), () => new Array(3).fill(0))
    return calc(n-1, 3, points, dp)
}

let arr = [[1,2,5], [3 ,1 ,1] ,[3,3,3]]
console.log(ninjaTraining(3, arr))