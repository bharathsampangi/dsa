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

    findMiddle() {
        let slow = this.head
        let fast = this.head

        while(fast.next != null) {
            fast = fast.next.next
            slow = slow.next
        }

        return slow
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(5)
ll.push(7)
ll.push(8)
console.log(ll.findMiddle())