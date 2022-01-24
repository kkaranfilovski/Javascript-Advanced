// Student constructor function
// Create a constructor function for Student objects with:
// Properties:
// firstName
// lastName
// birthYear
// academy
// grades - array of numbers
// Methods:
// getAge() - returns age of student
// getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
// getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        let studentAge = new Date().getFullYear() - birthYear;
        return studentAge
    }

    this.getInfo = function() {
        return `This is student ${firstName} ${lastName} from the academy ${academy}!`
    }

    this.getGradesAverage = function() {
        let sum = 0;
        for (grade of grades) {
            sum += grade
        }
        let average = sum / grades.length
        return average
    }
}

let studentOne = new Student('Kristijan', 'Karanfilovski', 1995, 'SEDC', [10, 10, 10])
let studentTwo = new Student('Petko', 'Petkovski', 1999, 'Semos', [7, 8, 10])
let studentThree = new Student('Ratko', 'Matko', 2000, 'SEDC', [8, 10, 9] )


let studentArray = [studentOne, studentTwo, studentThree]
console.log(studentArray)