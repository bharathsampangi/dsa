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
}

const findMiddle = (head) => {
    let slow = head
    let fast = head.next

    while(fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

const sortLL = (head) => {
    if(head === null || head.next === null) return head

    let middle = findMiddle(head)
    let leftHead = head
    let rightHead = middle.next
    middle.next = null
    leftHead = sortLL(leftHead)
    rightHead = sortLL(rightHead)

    return mergeTwoSortedLL(leftHead, rightHead)
}

const mergeTwoSortedLL = (head1, head2) => {
    const dummyNode = new Node(-1)
    let temp = dummyNode

    while(head1 != null && head2 != null) {
        if(head1.val < head2.val) {
            temp.next = head1
            temp = head1
            head1 = head1.next
        } else {
            temp.next = head2
            temp = head2
            head2 = head2.next
        }
    }

    if(head1) temp.next = head1
    else temp.next = head2

    return dummyNode.next
}

const ll = new LinkedList()
ll.push(1)
ll.push(5)
ll.push(4)
ll.push(3)
ll.push(8)
ll.push(6)
console.log(sortLL(ll.head))