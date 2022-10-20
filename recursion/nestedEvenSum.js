const nestedEvenSumHelper = (obj) => {
    let sum = 0
    const nestedEvenSum = (obj) => {
        let objValues = Object.values(obj)
        if(objValues.length <= 0) return
        for(let item in objValues) {
            if(objValues[item] instanceof Object) {
                nestedEvenSum(objValues[item])
            }
            else if(typeof objValues[item] === "number" && objValues[item] % 2 == 0) {
                sum = sum + objValues[item]
            }
        }
    }
    nestedEvenSum(obj)
    return sum
}

const inputObj = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notAnNumber: true,
            alsoNotAnNumber: 'yup'
        }
    }
}

const inputObj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: {c: 2}, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: {e: 2}, ee: 'car' }
}

console.log("nestedEvenSum", nestedEvenSumHelper(inputObj2))