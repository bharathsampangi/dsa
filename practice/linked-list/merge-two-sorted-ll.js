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
}

const mergeTwoSortedLL = (head1, head2) => {
    let tempHead = new Node(-1)
    let t1 = head1
    let t2 = head2
    let temp = tempHead

    while(t1 != null && t2 != null) {
        if(t1.val < t2.val) {
            temp.next = t1
            temp = t1
            t1 = t1.next
        } else {
            temp.next = t2
            temp = t2
            t2 = t2.next
        }
    }

    if(t1 === null) temp.next = t2
    if(t2 === null) temp.next = t1

    return tempHead.next
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

const ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(5)
ll.push(8)

const ll2 = new LinkedList()
ll2.push(2)
ll2.push(4)
ll2.push(6)
ll2.push(7)
ll2.push(10)

const newHead = mergeTwoSortedLL(ll.head, ll2.head)
printLL(newHead)
