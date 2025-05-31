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

    removeNthNodeFromEnd(N) {
        let fast = this.head
        let slow = this.head

        for(let i=0; i < N; i++) {
            fast = fast.next
        }

        while(fast.next != null) {
            fast = fast.next
            slow = slow.next
        }

        if(fast == null) {
            return this.head.next
        }

        slow.next = slow.next.next

        return this.head
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
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
ll.removeNthNodeFromEnd(2)
ll.printLL()
