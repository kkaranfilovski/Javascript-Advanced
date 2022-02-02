// Homework 1
// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:
// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

$(document).ready(function () {

    let baseUrl = 'https://swapi.dev/api/planets/?page=1'
    let nextPageUrl = null;
    let prevPageUrl = null;

    function getStarWarsPlanets(url) {
        $.ajax({
            url: url,
            method: 'GET',

            success: function (response) {
                console.log(response)
                showStarWarsPlanets(response.results, response.next, response.previous)
                nextPageUrl = response.next;
                prevPageUrl = response.previous
                console.log(nextPageUrl)
                console.log(prevPageUrl)
            },

            error: function (error) {
                console.log(error)
            }

        })
    }

    function showStarWarsPlanets(planets, nextPage, prevPage) {

        $('#table-head').html("")
        $('#table-body').html("")

        let thName = $('<th style="border: 1px solid black;", width="250px"></th>').html("Planet name")
        let thPopulation = $('<th style="border: 1px solid black;", width="250px"></th>').html("Population")
        let thClimate = $('<th style="border: 1px solid black;", width="250px"></th>').html("Climate")
        let thGravity = $('<th style="border: 1px solid black;", width="250px"></th>').html("Gravity")
        $('#table-head').append(thName, thPopulation, thClimate, thGravity)

        for (planet of planets) {

            let tableRow = $('<tr></tr>')
            let tableName = $('<td style="border: 1px solid black;"></td>').html(planet.name);
            let tablePopulation = $('<td style="border: 1px solid black;"></td>').html(planet.population);
            let tableClimate = $('<td style="border: 1px solid black;"></td>').html(planet.climate);
            let tableGravity = $('<td style="border: 1px solid black;"></td>').html(planet.gravity);

            tableRow.append(tableName, tablePopulation, tableClimate, tableGravity)
            $('#table-body').append(tableRow)
        }

        if (nextPage) {
            $('#next').show()
            $('#prev').hide()
        }

        if (prevPage) {
            $('#next').hide()
            $('#prev').show()
        }
    }

    // events

    $('#get-planets').on('click', function () {
        getStarWarsPlanets(baseUrl)
    })

    $('#next').on('click', function () {
        getStarWarsPlanets(nextPageUrl)
    })

    $('#prev').on('click', function () {
        getStarWarsPlanets(prevPageUrl)
    })

})