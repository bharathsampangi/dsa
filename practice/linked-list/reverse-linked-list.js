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

        return this
    }

    reverseLL() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let nextNode = null
        let prevNode = null
        node = node.next

        while(node != null) {
            nextNode = node.next
            node.next = prevNode
            prevNode = node
            node = nextNode
        }

        return this.head
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
let node = ll.reverseLL()
console.log(node)
