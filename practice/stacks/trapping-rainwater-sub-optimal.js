function calcPrefixMax(arr) {
    const prefixMax = []
    prefixMax[0] = arr[0]
    for(let i=1; i < arr.length; i++) {
        prefixMax[i] = Math.max(prefixMax[i-1], arr[i])
    }
    return prefixMax
}

function calcSuffixMax(arr) {
    const suffixMax = []
    suffixMax[arr.length-1] = arr[arr.length - 1]

    for(let i=arr.length - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], arr[i])
    }

    return suffixMax
}

function trappingRainWater(arr) {
    const prefixMax = calcPrefixMax(arr)
    const suffixMax = calcSuffixMax(arr)
    let leftMax=0
    let rightMax = 0
    let total = 0

    for(let i=0; i < arr.length; i++) {
        leftMax = prefixMax[i]
        rightMax = suffixMax[i]

        if(arr[i] < leftMax && arr[i] < rightMax) {
            total += Math.min(leftMax, rightMax) - arr[i]
        }
    }

    return total
}

const rainwater = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trappingRainWater(rainwater))