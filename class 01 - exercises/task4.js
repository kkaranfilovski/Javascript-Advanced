// Title Generator
// Create 3 inputs:
// Color
// FontSize
// Text
// Create a button for generating titles
// When the button is clicked generate a new h1 element with the color, font size, and text from the inputs

let color = document.getElementById('color');
let fontSize = document.getElementById('fontSize');
let text = document.getElementById('text');
let button = document.getElementById('btn');
let result = document.getElementById('result')

button.addEventListener('click', function(){
    let header = document.createElement('h1')
    header.innerText = `${text.value}`
    header.style.color = color.value
    header.style.fontSize = `${fontSize.value}px`
    
    result.appendChild(header)
})