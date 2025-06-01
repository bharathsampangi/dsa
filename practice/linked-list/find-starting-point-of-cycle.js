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

    addCycleNode(prevVal, val) {
        let newNode = new Node(val)

        this.tail.next = newNode
        this.tail = newNode

        let node = this.head
        while(node != null) {
            if(node.val === prevVal) {
                this.tail.next = node
                break;
            }
            else node = node.next
        }

        return this
    }

    findStartingPointOfCycle() {
        let slow = this.head
        let fast = this.head

        while(fast !=null && fast.next != null) {
            fast = fast.next.next
            slow = slow.next
            if(fast == slow) {
                slow = this.head
                while(fast !== slow) {
                    slow = slow.next
                    fast = fast.next
                }
                return slow
            }
                
        }
        return null
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(5)
ll.push(7)
ll.push(8)
ll.addCycleNode(5, 4)
console.log(ll.findStartingPointOfCycle())