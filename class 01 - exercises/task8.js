// Create a student registry page
// Create an HTML page with student registry form with
// First Name
// Last Name
// Age
// Email
// Create a student generator function
// When the form is submitted, the inputs should be compiled into a new object from the generator function Student
// This student should be added to a list called "database"
// After submit the database should be printed in the console
// The input fields should be cleared

function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;

    this.getInfo = function () {
        return `FIRSTNAME: ${firstName} LASTNAME: ${lastName} AGE: ${age} EMAIL: ${email}`
    }
}

let studentsArray = []

let button = document.getElementById('btn')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let age = document.getElementById('age')
let email = document.getElementById('email')
let result = document.getElementById('result')

button.addEventListener('click', function() {

    let addStudent = new Student(firstName.value, lastName.value, age.value, email.value)
    
    console.log(addStudent)
    studentsArray.push(addStudent)

    result.innerHTML += `<h3> ${addStudent.getInfo()} </h3>`
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    email.value = '';    
})