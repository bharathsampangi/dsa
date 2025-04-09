class TrieNode {
    constructor() {
        this.characters = {}
        this.endWord = 0
        this.charPrefix = 0
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
                currNode.charPrefix += 1
            } else {
                let tempNode = new TrieNode()
                tempNode.charPrefix += 1
                currNode.characters[char] = tempNode
                currNode = tempNode
            }
        }

        currNode.endWord += 1
    }

    countWordsEqualTo(word) {
        let currNode = this.root

        for(let char of word) {
            if(!currNode.characters[char]) {
                return 0
            }
            currNode = currNode.characters[char]
        }

        return currNode.endWord
    }

    countWordsStartsWith(word) {
        let currNode = this.root

        for(let char of word) {
            if(!currNode.characters[char]) {
                return 0
            }
            currNode = currNode.characters[char]
        }

        return currNode.charPrefix
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("apple");
console.log(trie.countWordsEqualTo("apple"))
console.log(trie.countWordsStartsWith("app"))