const factorialRecursion = (num) => {
    if(num === 1) return 1;
    return num * factorialRecursion(num - 1)
}

console.log("factorial recursion", factorialRecursion(5))