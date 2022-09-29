function validAnagram(anagram1, anagram2) {
    if(anagram1.length != anagram2.length)
        return false
    let frequency1={}, frequency2 = {}
    for(let i of anagram1) {
        frequency1[i] = (frequency1[i] || 0) + 1
    }
    for(let j of anagram2) {
        frequency2[j] = (frequency2[j] || 0) + 1
    }
    for(let i in frequency1) {
        if(!frequency2[i]) {
            return false
        }
        if(frequency1[i] != frequency2[i]) {
            return false
        }
    }
    return true
}

console.log("validAnagram", validAnagram('anagram', 'nagaram'))