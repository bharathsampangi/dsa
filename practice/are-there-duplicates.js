// frequency counter
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...array) {
    const map = {}

    for(let i=0; i < array.length; i++) {
        let item = array[i]
        if(map[item] == 1) {
            return true
        }
        if(!map[item]) {
            map[item] = 1
            continue
        }
    }

    return false
}
  
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true