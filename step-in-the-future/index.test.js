import { expect, test, describe } from 'vitest'
import { getAverageNumber } from './index'

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
