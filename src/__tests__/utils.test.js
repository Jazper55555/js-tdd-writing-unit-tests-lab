import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it('returns true if string is a palindrome', () => {
        const word = 'racecar'

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
})

describe('isPalindrome', () => {
    it('handles uppercase and lowercase input', () => {
        const word = 'RacecAr'

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
})

describe('isPalindrome', () => {
    it('returns false if string is empty', () => {
        const word = ''

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(false)
    })
})