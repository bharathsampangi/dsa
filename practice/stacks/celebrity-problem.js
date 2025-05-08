function findCelebrity(arr) {
    const KnowsMe = new Array(arr.length).fill(0)
    const IKnow = new Array(arr.length).fill(0)

    for(let i=0; i < arr.length; i++) {
        for(let j=0; j < arr[0].length; j++) {
            if(arr[i][j] === 1) {
                KnowsMe[j] = KnowsMe[j] + 1
                IKnow[i] = IKnow[i] + 1
            }
        } 
    }

    for(let i=0; i < arr.length; i++) {
        if(KnowsMe[i] === arr.length - 1 && IKnow[i] === 0) {
            return i
        }
    }
}

const array = [[0, 1, 1, 0], [0, 0, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
console.log(findCelebrity(array))