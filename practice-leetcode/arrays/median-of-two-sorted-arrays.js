// Hard
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

var findMedianSortedArrays = function(nums1, nums2) {
    let idx1 = 0
    let idx2 = 0
    const merged = []

    while(idx1 < nums1.length && idx2 < nums2.length) {
        if(nums1[idx1] === nums2[idx2]) {
            merged.push(nums1[[idx1]], nums2[idx2])
            idx1++
            idx2++
        }
        else if(nums1[idx1] < nums2[idx2]) {
            merged.push(nums1[idx1])
            idx1++
        } else {
            merged.push(nums2[idx2])
            idx2++
        }
    }

    while(idx1 < nums1.length) {
        merged.push(nums1[idx1])
        idx1++
    }

    while(idx2 < nums2.length) {
        merged.push(nums2[idx2])
        idx2++
    }

    if(merged.length % 2 === 0) {
        let mid = Math.floor(merged.length / 2)
        return (merged[mid] + merged[mid - 1]) / 2
    } else {
        let mid = Math.floor((merged.length) / 2)
        return merged[mid]
    }
};

console.log(findMedianSortedArrays([1, 2], [3]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))