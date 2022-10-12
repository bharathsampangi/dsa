const collectOddsHelper = (array) => {
    let odds = []
    const collectOdds = (array) => {
        if(array.length < 1) return
        if(array[0] % 2 != 0) {
            odds.push(array[0])
        }
        return collectOdds(array.slice(1))
    }
    collectOdds(array)

    return odds
}

console.log("collectOddsHelper" , collectOddsHelper([1, 2, 3, 4, 5]))