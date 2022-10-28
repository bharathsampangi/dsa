const stringifyNumbers = (obj) => {
    for(let i in obj){
        if(typeof obj[i] === "number") {
            obj[i] = obj[i].toString()
        }
        if(typeof obj[i] === "object") {
            stringifyNumbers(obj[i])
        }
    }
    return obj
}

const obj1 = {
    num: 1,
    last: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log("stringifyNumbers", stringifyNumbers(obj1))