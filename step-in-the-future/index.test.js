import { expect, test, describe } from 'vitest'
import { getAverageNumber, generateRandomNumbers } from './index'

describe('getAverageNumber tests', () => {
    test('test getAverageNumber 1', () => {
        const numbers = [1, 2, 3]
    
        expect(getAverageNumber(numbers)).toBe(2)
    })

    test('test getAverageNumber 2', () => {
        const numbers = [1, 2]
    
        expect(getAverageNumber(numbers)).toBe(1.5)
    })

})

describe('test all', () => {
    test('test 1', () => {
        const numbers = generateRandomNumbers(49, 51, 123, 1, 14)
        const average = getAverageNumber(numbers)

        expect(average).toBe(69.5714)
    })

    test('test 2', () => {
        const numbers = generateRandomNumbers(50, 50, 100, 1, 1000)
        const average = getAverageNumber(numbers)

        expect(average).toBe(49.95)
    })

})
