// Random color page
// Create an HTML page
// On every refresh the page should pick a random color and change the background of the page
// The RGB values of the color should be shown in the center of the page on every restart

let bodyColor = document.getElementById('color')

let r = Math.floor(Math.random() * 255) 
let g = Math.floor(Math.random() * 255)
let b = Math.floor(Math.random() * 255)


console.log(r)
console.log(g)
console.log(b)

document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

document.getElementById('result').innerText = `${r}, ${g}, ${b}`