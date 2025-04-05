class TrieNode {
    constructor() {
        this.characters = {}
        this.isEndNode = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currNode = this.root

        for(let char of word) {
            if(currNode.characters[char]) {
                currNode = currNode.characters[char]
            } else {
                let newTrie = new TrieNode()
                currNode.characters[char] = newTrie
                currNode = newTrie
            }
        }

        currNode.isEndNode = true
    }

    search(word) {
        let currNode = this.root

        for(let char of word) {
            if(!currNode.characters[char]) {
                return false
            }
            currNode = currNode.characters[char]
        }

        return currNode.isEndNode
    }
    
    startsWith(word) {
        let currNode = this.root

        for(let char of word) {
            if(!currNode.characters[char]) {
                return false
            }
            currNode = currNode.characters[char]
        }

        return currNode !== null
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"))
console.log(trie.startsWith("apx"))
