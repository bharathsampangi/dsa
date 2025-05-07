function nextSmallerElement(arr) {
    const stack = []
    const nse = []

    for(let i = arr.length - 1; i >=0; i--) {
        while(stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop()
        }

        nse[i] = !stack.length ? arr.length : stack[stack.length - 1]

        stack.push(i)
    }

    return nse
}

function previousSmallerOrEqualElement(arr) {
    const stack = []
    const psee = []

    for(let i=0; i < arr.length; i++) {
        while(stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop()
        }

        psee[i] = !stack.length ? -1 : stack[stack.length - 1]

        stack.push(i)
    }

    return psee
}

function subarraySumMinimum(arr) {
    let total = 0
    const psee = previousSmallerOrEqualElement(arr)
    const nse = nextSmallerElement(arr)

    for(let i=0; i < arr.length; i++) {
        let left = i - psee[i]
        let right = nse[i] - i

        total += left * right * arr[i]
    }

    return total
}

console.log(subarraySumMinimum([3, 1, 2, 4]))