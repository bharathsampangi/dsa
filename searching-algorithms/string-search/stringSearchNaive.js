function stringSearchNaive(string, pattern) {
    let count = 0
    for(let k=0; k < string.length; k++) {
        for(let l=0; l < pattern.length; l++) {
            if(string.charAt(k + l) !== pattern.charAt(l)) {
                break
            }
            if(l === pattern.length - 1) count++
        }
    }
    return count
}

const count = stringSearchNaive("loried lol", "lol")
console.log("count", count)