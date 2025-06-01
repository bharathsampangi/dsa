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
        console.log(node)
        const arr = []

        while(node != null) {
            arr.push(node.val)
            node = node.next
            console.log(node)
        }

        console.log(arr)
    }

    findIntersectionPairY(ll2) {
        let t1 = this.head
        let t2 = ll2.head

        if(this.head == null || ll2.head === null) return null

        while(t1 != t2) {
            t1 = t1.next
            t2 = t2.next
            if(t1 === t2) return t1
            if(t1 === null) t1 = ll2.head
            if(t2 == null) t2 = this.head
        }

        return t1
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(5)
let parent = ll.push(7)
ll.push(12)
ll.push(17)
ll.push(8)

const ll2 = new LinkedList()
ll2.push(2)
ll2.push(4)
let node = ll2.push(6)
node.next = parent
console.log(ll.findIntersectionPairY(ll2))

