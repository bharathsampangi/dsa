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

console.log(largestRectangleInHistogram([3, 2, 10, 11, 5, 10, 6, 3]))