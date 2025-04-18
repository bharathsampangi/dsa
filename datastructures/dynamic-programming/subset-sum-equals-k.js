function compute(i, target, arr) {
    if(target === 0) return true
    if(i === 0) return arr[0] === target

    let notPick = compute(i-1, target, arr)

    let pick = false
    if(target >= arr[i]) {
        pick = compute(i-1, target - arr[i], arr)
    }

    return pick || notPick
}

function subsetSumToK(n, k, arr) {
    // Write your code here.
    return compute(n-1, k, arr)
}

console.log(subsetSumToK(5, 4, [2, 5, 1, 6, 7]))