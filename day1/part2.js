const fs = require('fs')

const inputArray = fs.readFileSync('input.txt').toString().split("\n")
const matchingPattern = '(one|two|three|four|five|six|seven|eight|nine|zero|\\d)'

const toNumberStr = (value) => {
    const translator = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        'zero': '0'
    }

    if (!isNaN(parseInt(value))) return value;

    return translator[value];
}

const answer = inputArray.reduce((allValues, nextValue) => {
    const firstRegex = new RegExp(`(?<first>${matchingPattern}{1})`, 'i')
    const firstDigitStr = firstRegex.exec(nextValue);
    const firstDigit = toNumberStr(firstDigitStr.groups.first)
    const lastRegex = new RegExp(`.*(?:\\D|^)(?<last>${matchingPattern})+`, 'i')
    const lastDigitStr = lastRegex.exec(nextValue);
    const lastDigit = toNumberStr(lastDigitStr.groups.last)

    //for readability
    allValues.push(parseInt(firstDigit + lastDigit, 10))
    return allValues;
}, [])

console.log(answer.reduce((a, b) => a + b, 0))