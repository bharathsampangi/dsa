function nextGreaterElement(arr) {
    const nge = []
    const stack = []

    for(let i=arr.length -1; i >=0; i--) {
        while(stack.length && arr[i] >= stack[stack.length - 1]) {
            stack.pop()
        }

        if(!stack.length) {
            nge[i] = -1
        } else {
            nge[i] = stack[stack.length - 1]
        }

        stack.push(arr[i])
    }

    return nge
}

console.log(nextGreaterElement([6, 0, 8, 1, 3]))