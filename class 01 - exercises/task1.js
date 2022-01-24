// Generating arrays
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000


let arrayTwo = []
let arrayThree = []

function divisibleByThree () {
    let arrayOne = []
    for (let i = 1; i < 1001; i++) {
        if (i % 3 == 0) {
            arrayOne.push(i)
        }
    }
    return arrayOne
}

console.log(divisibleByThree())

function evenNumbersAndDivisibleByFour() {
    for (let i = 1; i < 1001; i++) {
        if (i % 2 == 0 && i % 4 == 0) {
            arrayTwo.push(i)
        }
    }
    return arrayTwo
}

console.log(evenNumbersAndDivisibleByFour())

function endsWithDigitOne() {
    for (let i = 1; i < 1001; i++) {
        if (i % 10 == 1) {
            arrayThree.push(i)
        }
    }
    return arrayThree
}

console.log(endsWithDigitOne())