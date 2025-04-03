// Medium 
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

function dailyTemperatures(temperatures) {
    const stack = []
    let head = 0
    let idx = 1

    if(!temperatures.length) return []

    const answer = new Array(temperatures.length).fill(0)
    stack.push(0)

    while(idx < temperatures.length) {
        let current = temperatures[idx]

        while(current > temperatures[stack[head]] && stack.length) {
            let lowerIdx = stack.pop()
            answer[lowerIdx] = idx - lowerIdx
            head--
        }

        stack.push(idx)
        idx++
        head++
    }

    return answer

}

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
const temperatures1 = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures1))
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100