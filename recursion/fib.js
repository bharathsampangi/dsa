const fibonacci = (num) => {
    if(num == 2) {
        return 1
    }
    else if(num == 1) {
        return 1
    }
    return fibonacci(num-1) + fibonacci(num - 2)
}

console.log("fib", fibonacci(35))