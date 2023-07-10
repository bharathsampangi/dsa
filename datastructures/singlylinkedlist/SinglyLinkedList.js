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
        return this
    }

    pop() {
        if(!this.head) 
            return undefined
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if(!this.head) 
            return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index > this.length || index < 0) return null
        let current = this.head
        let counter = 0
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    set(val, index) {
        const current = this.get(index)
        if(current) {
            current.val = val
            return true
        }
        return false
    }
    
    insert(val, index) {
        if(index < 0 || index > this.length) return undefined
        if(index === 0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let prev = this.get(index - 1)
        prev.next = prev.next.next
        this.length--
        return true
    }

    // own solution
    // reverse(){
    //     if(this.length < 0) return undefined
    //     let current = this.head.next
    //     let counter = 1
    //     while(current) {
    //         this.remove(counter)
    //         this.unshift(current.val)
    //         current = current.next
    //         counter++
    //     }
    //     return this
    // }

    reverse() {
        if(this.length < 0) return undefined
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next
        while(current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
}

const singleList = new SinglyLinkedList()
singleList.push("Hello")
singleList.push("How")
singleList.push("are")
singleList.push("babe")

console.log(singleList)

// console.log(singleList.get(2))
// singleList.pop()
// singleList.shift()

// console.log(singleList.set("you", 2))
// console.log(singleList.insert("Bully", 0))
// singleList.remove(2)

console.log(singleList.reverse())

console.log(JSON.stringify(singleList))
