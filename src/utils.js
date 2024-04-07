export function isPalindrome(word) {
    const re = /[\W_]/g

    const lowercaseWord = word.toLowerCase().replace(re, '')
    const reverseWord = lowercaseWord.split('').reverse().join('')

    if (word === '') {
        return false
    }   else if (lowercaseWord === reverseWord) {
        return true
    }
}
