// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
    const map = {}
    while(num1 > 9) {
        let rem = num1 % 10
        num1 = (num1 - rem) / 10
        if(!map[rem])
            map[rem] = 0
        map[rem] +=  1
    }
    if(!map[num1])
        map[num1] = 0
    map[num1] += 1

    while(num2 > 9) {
        let rem2 = num2 % 10
        num2 = (num2 -  rem2) / 10
        if(map[rem2] == 1)
            delete map[rem2]
        else 
            map[rem2] = map[rem2] - 1
    }
    if(map[num2] == 1)
        delete map[num2]
    else map[num2] -= 1

    return Object.keys(map).length === 0
}
  
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true