class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    push(val) {
        const newNode = new Node(val)

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        return this
    }

    oddEvenLL() {
        this.oddHead = this.head
        this.oddTail = this.head

        this.evenHead = this.head.next
        this.evenTail = this.head.next

        while(this.evenTail != null) {
            this.oddTail.next = this.oddTail.next.next
            this.evenTail.next = this.evenTail.next.next

            this.oddTail = this.oddTail.next
            this.evenTail = this.evenTail.next
        }

        this.oddTail.next = this.evenHead
        return this.oddHead
    }

    printLL() {
        let node = this.head
        console.log(node)
        const arr = []

        while(node != null) {
            arr.push(node.val)
            node = node.next
            console.log(node)
        }

        console.log(arr)
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(5)
ll.push(7)
ll.push(8)
const evenOddLL = ll.oddEvenLL()
ll.printLL()
