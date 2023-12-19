const fs = require('fs')

const inputArray = fs.readFileSync('./input.txt').toString().split("\n")

const answer = inputArray.reduce((allValues, nextValue) => {
    const firstDigitStr = nextValue.match(/(?<first>(\d{1}))/)
    const firstDigit = firstDigitStr.groups.first
    
    const lastDigitStr = nextValue.match(/.*(?:\D|^)(?<last>(\d))+/)
    const lastDigit = lastDigitStr.groups.last
    return allValues + parseInt(firstDigit + lastDigit, 10)
}, 0)
console.log(answer);