const fs = require('fs')

const inputArray = fs.readFileSync('input.txt').toString().split("\n")

const answer = inputArray.reduce((allValues, nextValue) => {
    const firstDigitStr = nextValue.match(/\d/)[0]
    const firstDigit = firstDigitStr[0]
    
    const lastDigitStr = nextValue.match(/.*(?:\D|^)(\d+)/)[0]
    const lastDigit = lastDigitStr[lastDigitStr.length - 1]

    return allValues + parseInt(firstDigit + lastDigit, 10)
}, 0);
console.log(answer)