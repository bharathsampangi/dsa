// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

class MinHeap {
    constructor() {
        this.values = []
    }

    enqueue(ele) {
        this.values.push(ele)
        this.bubbleUp(ele)
    }

    bubbleUp(element) {
        let i = this.values.length - 1
        while(i > 0) {
            let currIdx = Math.floor((i - 1) / 2)
            let current = this.values[currIdx]
            
            if(current > element) {
                this.values[i] = current
                this.values[currIdx] = element
                i = currIdx
            } else {
                break;
            }
        }
    }

    dequeue() {
        let max = this.values[0]
        let element = this.values.pop()
        if(this.values.length > 0) {
            this.values[0] = element
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let index = 0
        let element = this.values[index]
        let length = this.values.length
        
        while(true) {
            let leftIndex = (2 * index) + 1
            let rightIndex = (2 * index) + 2
            let leftChild, rightChild
            let swap = null

            if(leftIndex < length) {
                leftChild = this.values[leftIndex]
                if(leftChild < element) {
                    swap = leftIndex
                }
            }
            if(rightIndex < length) {
                rightChild = this.values[rightIndex]
                if((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightIndex
                }
            }
            if(swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }

    peek() {
        return this.values[0]
    }
}

function kthLargestElementArray(nums, k) {
    if(!nums.length || k < 0) return
    const heap = new MinHeap()

    for(let i=0; i < k; i++) {
        heap.enqueue(nums[i])
    }

    for(let j=k; j < nums.length; j++) {
        if(nums[j] > heap.peek()) {
            heap.dequeue()
            heap.enqueue(nums[j])
        }
    }

    return heap.peek()
}

console.log(kthLargestElementArray([3,2,1,5,6,4], 2))
console.log(kthLargestElementArray([3,2,3,1,2,4,5,5,6], 4))