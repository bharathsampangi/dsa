const collectStrings = (obj) => {
    let str = []
    const collect = (obj) => {
        for(let i in obj) {
            if(typeof obj[i] === "string")
                str.push(obj[i])
            if(typeof obj[i] === "object")
                collect(obj[i])
        }
    }
    collect(obj)
    return str
}

const obj1 = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz'
                    }
                }
            }
        }
    }
}

console.log("collectStrings", collectStrings(obj1))