// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    let i=0, j=0

    while(i < str1.length && j < str2.length) {
        if(str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++
        }
    }

    if(i === str1.length) return true

    return false
}

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "cat")); // true