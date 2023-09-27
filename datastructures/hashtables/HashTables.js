class HashTables {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for(let i=0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        const hashIndex = this._hash(key)
        if(!this.keyMap[hashIndex]) {
            this.keyMap[hashIndex] = []
        }
        this.keyMap[hashIndex].push([key, value])
    }

    get(key) {
        const hashIndex = this._hash(key)
        if(!this.keyMap[hashIndex]) {
            return undefined
        }
        const hashedElement = this.keyMap[hashIndex]
        for(let k=0; k<hashedElement.length; k++){
            const hash = hashedElement[k]
            if(hash[0] === key) {
                return hash[1]
            }
        }
    }

    keys() {
        const keys = []
        for(let k=0; k < this.keyMap.length; k++) {
            const hash = this.keyMap[k]
            if(hash)
            for(let l=0; l < hash.length; l++) {
                keys.push(hash[l][0])
            }
        }
        return keys
    }

    values() {
        const values = []
        for(let k=0; k < this.keyMap.length; k++) {
            const hash = this.keyMap[k]
            if(hash)
            for(let l=0; l < hash.length; l++) {
                if(!values.includes(hash[l][1]))
                values.push(hash[l][1])
            }
        }
        return values
    }
}

const hash = new HashTables(4)