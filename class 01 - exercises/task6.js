// List generator from an array
// Create an array of 5 names
// Create an HTML page with:
// A header
// An empty unordered list
// A button
// When the button is clicked it should fill in the empty unordered list with the names of the array

let array = ['Kristijan', 'Trajan', 'Nikola', 'Ilija', 'Igor']

let list = document.getElementById('list')
let button = document.getElementById('btn')

button.addEventListener('click', function(){
    for (name of array) {
        list.innerHTML += `<li> ${name} </li>`
    }
})