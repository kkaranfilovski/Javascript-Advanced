$(document).ready(function () {

    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    let nextPageUrl = null;
    let prevPageUrl = null;

    function getPokemonNames(url) {
        $.ajax({
            url: url,
            method: 'GET',

            success: function (response) {
                showPokemonNames(response.results, response.next, response.previous)
                console.log(response)
                nextPageUrl = response.next;
                prevPageUrl = response.previous
            },

            error: function (error) {
                console.log(error)
            }
        })
    }

    function showPokemonNames(pokemons, nextPage, prevPage) {

        let ul = $('#poke-list').html('')

        for (let pokemon of pokemons) {
            let li = $('<li class="poke-names"></li>');
            li.html(` <h3> Name: ${pokemon.name} </h3>
                      <button id='btn' value="${pokemon.url}"> Show info </button>`)
            ul.append(li);
        }

        if (nextPage) {
            $('#next').show();
        } else {
            $('#next').hide();
        }

        if (prevPage) {
            $('#prev').show();
        } else {
            $('#prev').hide();
        }
    }

    function showPokemonImg(url) {
        $.ajax({
            url: url,
            method: 'GET',

            success: function (response) {
                console.log(response)
                $(`#img`).html(`<img src="${response.sprites.front_default}" height = '300px'>`)
            },

            error: function (error) {
                console.log(error)
            }
        })
    }

    function showPokemonAbilities(url) {
        $.ajax({
            url: url,
            method: 'GET',

            success: function (response) {
                console.log(response)
                let h2 = $('<h2>Abilities:</h2>')
                $('#ability').append(h2)

                for (let i = 0; i < response.abilities.length; i++) {
                    let li = $('<li></li>')
                    li.html(`${response.abilities[i].ability.name}`)

                    $('#ability').append(li)
                }
            },

            error: function (error) {
                console.log(error)
            }
        })
    }

    $('#show-pokemons').on('click', function () {
        getPokemonNames(baseUrl)
    })

    $('#next').on('click', function () {
        getPokemonNames(nextPageUrl)
    })

    $('#prev').on('click', function () {
        getPokemonNames(prevPageUrl)
    })

    $('#poke-list').on('click', function (event) {
        console.log(event);
        if (event.target.nodeName === "BUTTON") {
            let targetUrl = event.target.value;
            $('#ability').html('')
            showPokemonImg(targetUrl)
            showPokemonAbilities(targetUrl)
        }
    })
});
