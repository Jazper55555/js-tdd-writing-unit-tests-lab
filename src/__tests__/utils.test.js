import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it('returns true if string is a palindrome', () => {
        const word = 'racecar'

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
})
