// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time Complexity - O(n log n)
// Space Complexity - O(1)
  
console.log(areThereDuplicatesWithTwoPointers(1, 2, 3)); // false
console.log(areThereDuplicatesWithTwoPointers('a', 'b', 'c', 'a')); // true
  
console.log(areThereDuplicatesWithOnePointer(1, 2, 3)); // false
console.log(areThereDuplicatesWithOnePointer('a', 'b', 'c', 'a')); // true