const sameFrequency = (number1, number2) => {
    let string1 = number1.toString()
    let string2 = number2.toString()
    let frequency1 = {}, frequency2 = {}
    for(let i of string1) {
        frequency1[i] = (frequency1[i] || 0) + 1
    }
    for(let j of string2) {
        frequency2[j] = (frequency2[j] || 0) + 1 
    }
    for(let k in frequency1) {
        if(!frequency2[k]) {
            return false
        }
        if(frequency1[k] != frequency2[k]) {
            return false
        }
    }
    return true
}

console.log("Same Frequency", sameFrequency(3589578, 5879385))