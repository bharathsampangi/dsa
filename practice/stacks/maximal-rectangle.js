function maximalRectangle(arr) {
    const prefixSum = [...arr]
    let max = -Infinity
    for(let i=1; i < arr.length; i++) {
        for(let j=0; j < arr[0].length; j++) {
            if(arr[i][j] != 0) {
                prefixSum[i][j] = prefixSum[i-1][j] + arr[i][j]
            } else {
                prefixSum[i][j] = 0
            }
        }
    }

    for(let i=0; i < prefixSum.length; i++) {
        max = Math.max(max, largestRectangleInHistogram(prefixSum[i]))
    }

    return max
}

function largestRectangleInHistogram(arr) {
    const stack = []
    let maxi = -Infinity

    for(let i=0; i<arr.length; i++) {
        while(stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            let element = stack.pop()
            let nse = i
            let pse = !stack.length ? -1 : stack[stack.length - 1]
            maxi = Math.max(maxi, arr[element] * (nse - pse - 1))
        }
        stack.push(i)
    }

    while(stack.length) {
        let nse = arr.length
        let element = stack.pop()
        let pse = !stack.length ? -1 : stack[stack.length - 1]
        maxi = Math.max(maxi, arr[element] * (nse - pse - 1))
    }
    
    return maxi
}

const array = [[1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1,], [1, 0, 0, 1, 0]]
console.log(maximalRectangle(array))