class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.child = null
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

    insertChild(node, val) {
        const newNode = new Node(val)
        while(node.child != null) {
            node = node.child
        }
        node.child = newNode
        return this
    }
}

const flatten = (head) => {
    if(head == null || head.next == null) {
        return head
    }
    mergeHead = flatten(head.next)
    // console.log("merge", mergeHead)
    // console.log("head", head)
    return mergeTwoSortedLL(head, mergeHead)
}

const mergeTwoSortedLL = (head1, head2) => {
    const dummyNode = new Node(-1)
    let res = dummyNode

    while(head1 != null && head2 != null) {
        if(head1.val < head2.val) {
            res.child = head1
            res.next = null
            res = head1
            head1 = head1.child
        } else {
            res.child = head2
            res.next = null
            res = head2
            head2 = head2.child
        }
    }

    if(head1) res.child = head1
    else res.child = head2

    return dummyNode.child
}

const ll = new LinkedList()
ll.push(1)
let second = ll.push(2)
let third = ll.push(3)
let four = ll.push(4)
ll.insertChild(second, 5)
ll.insertChild(second, 11)
ll.insertChild(second, 13)
ll.insertChild(third, 7)
ll.insertChild(third, 9)
ll.insertChild(four, 8)
ll.insertChild(four, 10)
console.log(flatten(ll.head))
