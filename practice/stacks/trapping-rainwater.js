function trappingRainWater(arr) {
    let leftMax = 0
    let rightMax = 0
    let total = 0
    let l =0
    let r = arr.length - 1

    while(l < r) {
        if(arr[l] <= arr[r]) {
            if(arr[l] < leftMax) {
                total = total + leftMax - arr[l]
            } else {
                leftMax = arr[l]
            }
            l++
        } else {
            if(arr[r] < rightMax) {
                total = total + rightMax - arr[r]
            } else {
                rightMax = arr[r]
            }
            r--
        }
    }

    return total
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))