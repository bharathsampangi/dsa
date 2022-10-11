const sumRange= (num) => {
    if(num <= 0) return num
    console.log('num', num)
    return num + sumRange(num - 1)
}

console.log('sumRange', sumRange(5))