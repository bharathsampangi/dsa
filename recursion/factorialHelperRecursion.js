const factorialHelperRecursion = (num) => {
    let fact = 1

    const factorial = (num) => {
        if(num === 1) return 1
        return num * factorial(num - 1)
    }

    fact = factorial(num)
    console.log("factorial", fact)
}

factorialHelperRecursion(5)