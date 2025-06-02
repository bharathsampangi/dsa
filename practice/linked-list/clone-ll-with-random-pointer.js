class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.random = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.random = null
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

        return newNode
    }
}

const printLL = (head) => {
    let node = head
    const arr = []

    while(node != null) {
        arr.push(node.val)
        node = node.next
    }

    console.log(arr)
}

const cloneLL = (head) => {
    let temp = head

    while(temp != null) {
        const newNode = new Node(temp.val)
        let next = temp.next
        temp.next = newNode
        newNode.next = next
        temp = temp.next.next
    }

    let newHead = head.next
    temp = head
    while(temp != null) {
        temp.next.random = temp.random.next
        temp.next = temp.next.next
        temp = temp.next
    }

    return newHead
}

const ll = new LinkedList()
const first = ll.push(1)
const second = ll.push(2)
const third = ll.push(3)
const four = ll.push(4)
const five = ll.push(5)
first.random = third
second.random = five
third.random = four
four.random = first
five.random = second
console.log(printLL(ll.head))
console.log(cloneLL(ll.head))
