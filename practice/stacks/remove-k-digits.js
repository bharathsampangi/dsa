function removeKDigits(str, K) {
    const stack = []
    let result = ''

    for(let i=0; i < str.length; i++) {
        while(stack.length && stack[stack.length - 1] - '0' > str[i] - '0' && K > 0) {
            stack.pop()
            K--
        }
        stack.push(str[i])
    }

    while(stack.length && K>0) {
        stack.pop()
        K--
    }

    while(stack.length) {
        result = stack.pop() + result
    }
    
    return result
}

console.log(removeKDigits("1432219", 3))