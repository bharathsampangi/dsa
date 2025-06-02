// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
    let result = []
    if(!obj)
        return result

    for(let item in obj) {
        if(typeof obj[item] === "object")
            result = result.concat(collectStrings(obj[item]))
        else if(typeof obj[item] === "string")
            result.push(obj[item])
    }

    return result
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

console.log(JSON.stringify(collectStrings(obj))); // ['foo', 'bar', 'baz'])
