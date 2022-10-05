const isSubsequence = (str1, str2) => {
    let i=0, j=0
    if(str2.length < str1.length) {
        return false
    }
    while(i < str1.length && j < str2.length) {
        if(str1[i] === str2[j]) {
            i++;
        }
        j++
    }
    return i === str1.length
}

console.log("subsequence", isSubsequence('sing', 'sting'))