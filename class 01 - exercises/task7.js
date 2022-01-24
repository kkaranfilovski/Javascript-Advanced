// List Generator dynamically from inputs
// Create 3 inputs:
// Color
// FontSize
// Items
// Create a button for generating unordered lists
// When the button is clicked generate a new ul element with the color, font size, and items from the inputs

let color = document.getElementById('color');
let fontSize = document.getElementById('fontSize');
let inputItems = document.getElementById('items');
let button = document.getElementById('btn');
let result = document.getElementById('result')

console.log(inputItems.value)

button.addEventListener('click', function(){

    let ul = document.createElement('ul')
    ul.style.color = color.value;
    ul.style.fontSize = `${fontSize.value}px`
    ul.innerHTML += `<li> ${fontSize.value} ${color.value} ${inputItems.value} </li>`
    
    result.appendChild(ul)

})