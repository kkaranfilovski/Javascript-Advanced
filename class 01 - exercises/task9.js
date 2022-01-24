// Movies renting App
// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let movies = ['the godfather', 'lord of the rings', 'harry potter', 'batman', 'james bond', 'spiderman']
console.log(movies)

let movieName = document.getElementById('movieName');
let button = document.getElementById('btn')
let result = document.getElementById('result')


button.addEventListener('click', function(){
    for (let title of movies) {

        if (movieName.value.toLowerCase() === title) {
            result.innerText = 'The movie can be rented'
            result.style.color = 'green'
            break;
        } else {
            result.innerText = `The movie can't be rented`
            result.style.color = 'red'
        }
    }
})