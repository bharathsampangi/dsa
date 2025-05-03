function nextGreaterElement(arr) {
    const N = arr.length
    const stack = []
    const nge = []

    for(let i = 2 * N - 1; i >= 0; i--) {
        while(stack.length && stack[stack.length - 1] <= arr[i % N]) {
            stack.pop()
        }

        if(!stack.length) {
            nge[i] = -1
        } else {
            nge[i] = stack[stack.length - 1]
        }

        stack.push(arr[i % N])
    }

    return nge.slice(0, N)
}

console.log(nextGreaterElement([2, 10, 12, 1, 11]))