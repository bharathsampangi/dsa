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

    bsfIterative() {
        let queue = []
        let bfs = []
        let current = this.root
        queue.push(current)
        while(current && queue.length > 0) {
            current = queue.shift()
            if(current) bfs.push(current.value)
            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right)
            }
        }
        return bfs
    }

    preOrder(node, visited) {
        visited.push(node.value)
        if(node.left) this.preOrder(node.left, visited)
        if(node.right) this.preOrder(node.right, visited)
        return visited
    }

    preOderDFS() {
        const visited = []
        this.preOrder(this.root, visited)
        return visited
    }

    postOrderDFS() {
        const visited = []
        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            visited.push(node.value)
        }
        traverse(this.root)
        return visited
    }

    inOrderTraversal() {
        const visited = []
        function traverse(node) {
            if(node.left) traverse(node.left)
            visited.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
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
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)

