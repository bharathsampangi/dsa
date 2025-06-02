class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    push(val) {
        let newNode = new Node(val)

        if(!this.root) {
            this.root = newNode
            return this
        }

        const queue = [this.root]

        while(queue.length) {
            let current = queue.shift()

            if(!current.left) {
                current.left = newNode
                return this
            } else {
                queue.push(current.left)
            }

            if(!current.right) {
                current.right = newNode
                return this
            } else {
                queue.push(current.right)
            }
        }

        return newNode
    }

    preOrderTraversal() {
        const visited = []
        const traverse = (current) => {
            visited.push(current.val)
            if(current.left) traverse(current.left)
            if(current.right) traverse(current.right)
        }
        traverse(this.root)
        return visited
    }

    postOrderTraversal() {
        const visited = []
        const traverse = (current) => {
            if(current.left) traverse(current.left)
            if(current.right) traverse(current.right)
            visited.push(current.val)
        }
        traverse(this.root)
        return visited
    }

    inOrderTraversal() {
        const visited = []
        const traverse = (current) => {
            if(current.left) traverse(current.left)
            visited.push(current.val)
            if(current.right) traverse(current.right)
        }
        traverse(this.root)
        return visited
    }
}

const binaryTree = new BinaryTree()
binaryTree.push(1)
binaryTree.push(2)
binaryTree.push(3)
binaryTree.push(4)
binaryTree.push(5)
binaryTree.push(6)
binaryTree.push(7)
console.log(binaryTree.preOrderTraversal())
console.log(binaryTree.postOrderTraversal())
console.log(binaryTree.inOrderTraversal())
