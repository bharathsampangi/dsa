class Trie {
    constructor() {
        this.characters = {}
        this.isWordEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new Trie()
    }

    addWord(word) {
        let currNode = this.root

        for(let char of word) {
            if(currNode.characters[char]) {
                currNode = currNode.characters[char]
            } else {
                let tempNode = new Trie()
                currNode.characters[char] = tempNode
                currNode = tempNode
            }
        }

        currNode.isWordEnd = true
    }

    search(word) {
        let currNode = this.root

        for(let char of word) {
            if(!currNode.characters[char]) {
                return false
            }
            currNode = currNode.characters[char]
        }

        return currNode.isWordEnd || word[word.length - 1] === "."
    }
}

var obj = new WordDictionary()
obj.addWord("apple")
var param_2 = obj.search(".pple")
console.log(param_2)