class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if(!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root
        while(true) {
            if(value === current.value) return undefined
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else {
                if(current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    find(value) {
        if(!this.root) return false
        let current = this.root, found = false
        while(!found && current) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = true
            }
        }
        return found
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)

