function round(num) {
    return Math.round((num + Number.EPSILON) * 10000) / 10000
}

export function getAverageNumber(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }

    return round(sum / numbers.length)
}

export function generateRandomNumbers(a, c, m, x0, n) {
    let numbers = []
    let xprev = x0

    for (let i = 0; i < n; i++) {
        let x = (a * xprev + c) % m
        numbers.push(x)
        xprev = x
    }

    return numbers
}
