const reverseString = (string) => {
    let reversedString = ''
    const reverse = (string) => {
        if(string.length == 0)
            return reversedString
        reversedString = reversedString.concat(string[string.length - 1])
        reverse(string.slice(-string.length, -1))
    }
    reverse(string)
    return reversedString
}

console.log("reverse", reverseString('awesome'))