function mergeSort(array) {

}

function merge(array1, array2) {
    let newArray = []
    let i=0, j=0
    while(i<array1.length || j<array2.length) {
        if(array1[i] < array2[j]) {
            newArray.push(array1[i]);
            i++;
            continue;
        } else if(array2[j] < array1[i]) {
            newArray.push(array2[j]);
            j++;
            continue;
        }
        if(array1[i]) {
            newArray.push(array1[i]);
            i++;
        }
        if(array2[j]) {
            newArray.push(array2[j]);
            j++;
        }
    }
    return newArray
}

console.log("merge", merge([1, 5, 50], [2, 14, 99, 100]))