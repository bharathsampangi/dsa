const isPalindrome = (str) => {
    if(str.length <= 1) return true
    else if(str[0] != str[str.length - 1]) return false
    return isPalindrome(str.slice(1, str.length - 1))
}

console.log("isPalindrome", isPalindrome("amanaplanacanalpandemonium"))