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

    isPalindrome() {
        let slow = this.head
        let fast = this.head

        while(fast.next != null && fast.next.next != null) {
            slow = slow.next
            fast = fast.next.next
        }

        let list = this.reverse(slow.next)
        console.log(list)
        slow.next = null

        return this.compareLL(this.head, list)
    }

    compareLL(list1, list2) {
        while(list2 != null) {
            if(list1.val !== list2.val) {
                this.reverse(list2)
                return false
            }
            list1 = list1.next
            list2 = list2.next
        }

        this.reverse(list2)
        return true
    }

    reverse(head) {
        let node = head
        let nextNode = null
        let prevNode = null

        while(node != null) {
            nextNode = node.next
            node.next = prevNode
            prevNode = node
            node = nextNode
        }

        return prevNode
    }
}

const ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(5)
ll.push(3)
ll.push(1)
console.log(ll.isPalindrome())