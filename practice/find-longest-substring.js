// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n^2)

// console.log(findLongestSubstringVersion1("")); // 0
// console.log(findLongestSubstringVersion1("rithmschool")); // 7
// console.log(findLongestSubstringVersion1("thisisawesome")); // 6

// Time Complexity - O(n)

function findLongestSubstringVersion2(str) {
    let max = 0
    let start = 0
    let obj = {}

    for(let i=0; i < str.length; i++) {
        if(obj[str[i]]) {
            start = obj[str[i]] = Math.max(start, obj[str[i]])
        }

        obj[str[i]] = i + 1
        max = Math.max(max, i - start + 1)
    }

    return max
}

console.log(findLongestSubstringVersion2("")); // 0
console.log(findLongestSubstringVersion2("rithmschool")); // 7
console.log(findLongestSubstringVersion2("thisisawesome")); // 6