const countDown = (num) => {
    if(num <=0) {
        return
    }
    console.log("num", num)
    num = num - 1
    return countDown(num)
}

console.log("count down", countDown(5))