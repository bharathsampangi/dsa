class Node{
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
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        return this
    }

    addNode(head, tail, node) {
        if(!head) {
            head = node
            tail = node
        } else {
            tail.next = node
            tail = node
        }
    }

    sortNumbers() {
        let zeroHead = null
        let zeroTail = null
        let oneHead = null
        let oneTail = null
        let twoHead = null
        let twoTail = null

        let node = this.head
        while(node != null) {
            if(node.val == 0) {
                if(!zeroHead) {
                    zeroHead = node
                    zeroTail = node
                } else {
                    zeroTail.next = node
                    zeroTail = node
                }
            } else if(node.val == 1) {
                if(!oneHead) {
                    oneHead = node
                    oneTail = node
                } else {
                    oneTail.next = node
                    oneTail = node
                }
            } else {
                if(!twoHead) {
                    twoHead = node
                    twoTail = node
                } else {
                    twoTail.next = node
                    twoTail = node
                }
            }
            node = node.next
        }

        console.log(zeroHead)
        zeroTail.next = oneHead
        oneTail.next = twoHead
        return zeroHead
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
ll.push(0)
ll.push(1)
ll.push(0)
ll.push(1)
ll.push(2)
const sorted = ll.sortNumbers()
console.log(ll.printLL())