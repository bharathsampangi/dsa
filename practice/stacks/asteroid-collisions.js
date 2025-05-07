function asteroidCollisions(arr) {
    const queue = []

    for(let i =0; i< arr.length; i++) {
        if(arr[i] > 0) {
            queue.push(arr[i])
        } else {
            while(queue.length && Math.abs(arr[i]) > queue[queue.length - 1] && queue[queue.length - 1] > 0) {
                queue.pop()
            }
            if(queue.length && Math.abs(arr[i]) == queue[queue.length - 1]) {
                queue.pop()
            } else if(!queue.length || queue[queue.length - 1] < 0) {
                queue.push(arr[i])
            }
        }
    }

    return queue
}

console.log(asteroidCollisions([4, 7, 1, 1, 2, -3, -7, 17, 15, -18, -19]))