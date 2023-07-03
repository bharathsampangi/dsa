class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    push(val) {
        const newNode = new Node(val)
        this.length++
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        this.tail = newNode
    }

    pop() {
        if(!this.head || !this.tail) 
            return
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        let current = this.head
        let prev = null
        for(let i=0; i < this.length; i++) {
            if(current === this.tail) {
                prev.next = null
            } else {
                prev = current
                current = current.next
            }
        }
        this.length--
        return
    }

    shift() {
        if(!this.head || !this.tail) 
            return
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        this.head = this.head.next
        this.length--
    }

    unshift() {

    }
}

const singleList = new SinglyLinkedList()
singleList.push("Hello")
singleList.push("How")

console.log(singleList)

// singleList.pop()
singleList.shift()

console.log(singleList)