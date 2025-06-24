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

    maximumDepthOfBinaryTree(node) {
        if(node === null) {
            return 0
        }
        let lh = this.maximumDepthOfBinaryTree(node.left)
        let rh = this.maximumDepthOfBinaryTree(node.right)
        return 1 + Math.max(lh, rh)
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
binaryTree.push(8)
console.log(binaryTree.maximumDepthOfBinaryTree(binaryTree.root))