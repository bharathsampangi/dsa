// frequency counter
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
    let map = {}

    for(let c of str1) {
        if(!map[c]) {
            map[c] = 1
            continue
        }
        map[c] = map[c] + 1
    }

    for(let c of str2) {
        if(!map[c])
            break
        if(map[c] == 1) {
            delete map[c]
            continue
        }
        map[c] = map[c] - 1
    }
    
    console.log(map)
    return Object.keys(map).length === 0
}
 
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false