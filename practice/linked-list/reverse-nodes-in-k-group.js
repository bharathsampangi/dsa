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

    findKthNode(node, K) {
        K--
        while(node != null && K > 0) {
            node = node.next
            K--
        }
        return node
    }

    reverseNodesInKGroup(K) {
        let temp = this.head
        let kthNode
        let nextNode
        let prevNode

        while(temp != null && temp.next != null) {
            kthNode = this.findKthNode(temp, K)

            if(kthNode === this.head) break;

            nextNode = kthNode.next
            kthNode.next = null
            this.reverseLL(temp, kthNode)
            if(temp === this.head) {
                this.head = kthNode
            } else {
                prevNode.next = kthNode
            }
            prevNode = temp
            temp = nextNode
        }

        return this.head
    }

    reverseLL(head) {
        let node = head
        let nextNode = null
        let prevNode = null

        while(node != null) {
            nextNode = node.next
            node.next = prevNode
            prevNode = node
            node = nextNode
        }

        return head
    }

    printLL() {
        let node = this.head
        const arr = []

        while(node != null) {
            arr.push(node.val)
            node = node.next
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
ll.push(6)
ll.push(7)
ll.push(8)
ll.push(9)
console.log(ll.reverseNodesInKGroup(3))
ll.printLL()