// Clean arrays
// Create a function that cleans an array of any values and leaves only STRINGS
// Create a function that cleans an array of any values and leaves only NUMBERS
// Create a function that cleans undefined, null, NaN, and "" and leaves all other values
// Test arrays:

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function strings(array) {
    let stringArray = [];
    for (let string of array){
        if (typeof(string) === 'string') {
            stringArray.push(string)
        }
    }
    return stringArray
}

console.log(strings(test))

function numbers(array) {
    let numberArray = [];
    for (let number of array) {
        if (typeof(number) === 'number'){
            numberArray.push(number)
        }
    }
    return numberArray
}

console.log(numbers(test))

function cleanAll(array) { // neznam ime za ova
    let cleanArray = [];
    for (let clean of array) {
        if (typeof(clean) !== 'undefined' && typeof(clean) !== 'object' && clean !== '' && !Number.isNaN(clean)) {
            cleanArray.push(clean)
        }
    }
    return cleanArray
} 

console.log(cleanAll(test))