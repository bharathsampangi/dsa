class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(this.length === 0 || index > this.length) {
            return undefined
        }
        let current = this.head
        let counter = 0
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    set(index, val) {
        if(this.length === 0 || index > this.length) return undefined
        let current = this.head
        let counter = 0
        while(counter != index) {
            current = current.next
            counter++
        }
        current.val = val
        return current
    }
    insert(index, val) {
        const newNode = new Node(val)
        let counter = 0
        let current = this.head
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            while(counter !== index - 1) {
                current = current.next
                counter++
            }
            const prev = current
            const next = current.next
            prev.next = newNode
            newNode.prev = prev
            newNode.next = next
            next.prev = newNode
        }
        this.length++
        return newNode
    }
    remove(index) {
        let current = this.head
        let counter = 0
        if(this.length === 0 || index > this.length) return undefined
        while(counter !== index-1) {
            current = current.next
            counter++
        }
        const prev = current
        const next = current.next
        prev.next = next.next
        next.next.prev = prev
        return next
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
list.push("Dumbledore")