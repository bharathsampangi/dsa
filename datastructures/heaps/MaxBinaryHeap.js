class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)

        let idx = this.values.length - 1
        let element = this.values[idx]

        while(idx > 0) {
            const parentIdx = Math.floor((idx-1)/2)
            const parent = this.values[parentIdx]
            if(parent >= element) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax() {
        const maxElement = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        this.values.pop()
        let index = 0
        let tempNode = this.values[index]

        while(index < this.values.length) {
            const maxIndex = this.values[(2*index) + 1] > this.values[(2 * index) + 2] ? 2 * index + 1 : 2 * index + 2
            const tempMax = this.values[maxIndex]
            if(this.values[maxIndex] > this.values[index]) {
                this.values[index] = tempMax
                this.values[maxIndex] = tempNode
                index = maxIndex
            } else {
                return maxElement
            }
        }
        
    }
}

const heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
