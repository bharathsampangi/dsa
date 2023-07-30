class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class MinPriorityQueue {
    constructor() {
        this.values = []
    }

    queue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        this.handleQueueing(newNode)
    }

    handleQueueing(newNode) {
        let index = this.values.length - 1
        while(index > 0) {
            const newIndex = Math.floor((index - 1) / 2)
            const current = this.values[newIndex]

            if(current.priority <= newNode.priority) break
            this.values[newIndex] = newNode
            this.values[index] = current
            index = newIndex
        }
    }

    dequeue() {
        const priorityNode = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        const element = this.values.pop()
        console.log("element", element)

        this.handleDequeuing(element)
    }

    handleDequeuing(element) {
        let index = 0
        let length = this.values.length - 1
        while(index < length) {
            let leftIndex = (2*index) + 1
            let rightIndex = (2*index) + 2
            let minIndex = null
            if(rightIndex < length && leftIndex < length) {
                minIndex = this.values[leftIndex] < this.values[rightIndex] ? leftIndex : rightIndex
            }
            else if(leftIndex < length) {
                minIndex = leftIndex
            } else {
                break
            }
            if(this.values[minIndex] > this.values[index]) break
            this.values[index] = this.values[minIndex]
            this.values[minIndex] = element
            index = minIndex
        }
    }
}

const priorityQueue = new MinPriorityQueue()
priorityQueue.queue("Broken leg", 4)
priorityQueue.queue("Headache", 15)
priorityQueue.queue("fever", 8)
priorityQueue.queue("Nausea", 6)
priorityQueue.queue("Stomach Ulcer", 3)
priorityQueue.queue("Gunshot", 1)
