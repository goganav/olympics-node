// const speedArray = [1.1, 1.2, 0.9, 1.0, 0.99]

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let speedArrayLength = 0
let linesRead = 0
let speedArray = []

rl.on('line', (line) => {
    if (linesRead === 0) {
        speedArrayLength = Number(line)
    }

    if (linesRead === speedArrayLength) {
        console.log(
            countObstacles(speedArray)
        )
        process.exit()
    } else {
        speedArray.push(Number(line))
    }

    linesRead++
}); 

function countObstacles(data) {
    let result = 0

    for (let i = 1; i < data.length; i++) {
        const prev = data[i - 1]
        const cur = data[i]

        if (cur < prev) {
            result += 1
        }
    }

    return result
}

// console.log(
//     countObstacles(speedArray)
// )
