class Node {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class BrowserHistory {
    constructor(url) {
        this.homepage = new Node(url)
        this.current = this.homepage
    }

    visit(url) {
        const newNode = new Node(url)
        this.current.next = newNode
        newNode.prev = this.current
        this.current = newNode
    }

    back(num) {
        while(this.current.prev != null && num > 0 ) {
            this.current = this.current.prev
            num--
        }

        return this.current
    }

    forward(num) {
        while(this.current.next != null && num > 0) {
            this.current = this.current.next
            num--
        }

        return this.current
    }
}

const history = new BrowserHistory()
history.visit("www.google.com")
history.visit("www.tuf.com")
history.visit("www.ibomma.com")
history.visit("www.netflix.com")
history.visit("www.amazonprime.com")
history.visit("www.react.com")
console.log(history.back(3))
console.log("forward", history.forward(1))