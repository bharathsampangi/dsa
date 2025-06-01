class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
    }

    push(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        return newNode
    }

    printLL() {
        let node = this.head
        const arr = []

        while(node != null) {
            arr.push(node.val)
            node = node.next
        }

        console.log(arr)
    }

    lengthOfLL() {
        let temp = this.head
        let count = 0
        while(temp != null) {
            count++
            temp = temp.next
        }
        return count
    }

    rotateLL(K) {
        const length = this.lengthOfLL()
        let rotation = K % length
        let d = length - rotation
        if(d === length) return this.head


        this.tail.next = this.head
        let temp = this.head
        for(let i=1; i < d; i++) {
            temp = temp.next
        }
        this.head = temp.next
        temp.next = null
        this.tail = temp
        return this.head
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
ll.rotateLL(2)
ll.printLL()