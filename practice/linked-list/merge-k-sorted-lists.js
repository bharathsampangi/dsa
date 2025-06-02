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

const mergeSortedLists = (arr) => {
    let head = arr[0]

    for(let i=1; i < arr.length; i++) {
        head = mergeTwoSortedLL(head, arr[i])
    }

    return head
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
ll.push(3)
const ll2 = new LinkedList()
ll2.push(5)
ll2.push(7)
ll2.push(8)
const ll3 = new LinkedList()
ll3.push(2)
ll3.push(4)
console.log(mergeSortedLists([ll.head, ll2.head, ll3.head]))