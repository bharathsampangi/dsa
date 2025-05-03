function previousSmallerElement(arr) {
    const pse = []
    const stack = []
    for(let i=0; i < arr.length; i++) {
        while(stack.length && arr[i] <= stack[stack.length - 1]) {
            stack.pop()
        }

        if(!stack.length) {
            pse[i] = -1
        } else {
            pse[i] = stack[stack.length - 1]
        }

        stack.push(arr[i])
    }

    return pse
}

console.log(previousSmallerElement([4, 5, 2, 10, 8]))