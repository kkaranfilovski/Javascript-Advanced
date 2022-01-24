// Reminder App
// Create a reminder app
// There should be:
// An input for entering the title
// An input for entering priority
// An input for color
// A textarea for adding a description
// A button for adding the reminder
// A button for showing all reminders
// When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

function Remainder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

let title = document.getElementById('title');
let priority = document.getElementById('priority');
let color = document.getElementById('color');
let textarea = document.getElementById('textarea');

let addButton = document.getElementById('add')
let showButton = document.getElementById('show')

let tableHeader = document.getElementById('tableHeader')
let tbody = document.getElementById('tbody')

let remainderArray = [];

addButton.addEventListener('click', function(){
     
    let newRemainder = new Remainder(title.value, priority.value, color.value, textarea.value)

    remainderArray.push(newRemainder)
})

showButton.addEventListener('click', function(){

    tableHeader.innerHTML += `<th style="border: 1px black solid;"> Title </th>`
    tableHeader.innerHTML += `<th style="border: 1px black solid;"> Priority </th>`
    tableHeader.innerHTML += `<th style="border: 1px black solid;"> Description </th>`


    for (let i = 0; i < remainderArray.length; i++) {
        
        tableRow = document.createElement('tr')

        tableRow.innerHTML += `<td style="color:${remainderArray[i].color}; border: 1px black solid;">${remainderArray[i].title}</td>`
        tableRow.innerHTML += `<td style="border: 1px black solid;">${remainderArray[i].priority}</td>`
        tableRow.innerHTML += `<td style="border: 1px black solid;">${remainderArray[i].description}</td>`
        tbody.appendChild(tableRow)
    }
})

