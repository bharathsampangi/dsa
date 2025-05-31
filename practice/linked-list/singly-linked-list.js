class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
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
    }

    pop() {
        let node = this.head

        while(node.next.next !== null) {
            node = node.next
        }

        let removedNode = node.next
        node.next = null
        this.tail = node
        return removedNode
    }

    shift() {
        if(!this.head) return
        let removedNode = this.head

        this.head = this.head.next
        return removedNode
    }

    reverse() {
        
    }
}

const ll = new SinglyLinkedList()
ll.push(3)
ll.push(5)
ll.push(6)
console.log(ll)