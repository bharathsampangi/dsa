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

    deleteMiddle() {
        let slow = this.head
        let fast = this.head
        let prevSlow = slow

        while(fast.next != null) {
            fast = fast.next.next
            prevSlow = slow
            slow = slow.next
        }

        prevSlow.next = prevSlow.next.next
        return this
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
ll.deleteMiddle()
ll.printLL()