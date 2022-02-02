$(document).ready(function () {

    $('#btn').on('click', function () {
        $.ajax({
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
            method: 'GET',

            success: function (response) {

                console.log(response)
                let btcPriceObj = JSON.parse(response)
                console.log(btcPriceObj)

                $('#result').html(`<li>${btcPriceObj.chartName} price at ${btcPriceObj.time.updateduk} is ${btcPriceObj.bpi.USD.rate} ${btcPriceObj.bpi.USD.code}.</li> <br>
                                   <li>${btcPriceObj.chartName} price at ${btcPriceObj.time.updateduk} is ${btcPriceObj.bpi.EUR.rate} ${btcPriceObj.bpi.EUR.code}.</li> <br>
                                   <li>${btcPriceObj.chartName} price at ${btcPriceObj.time.updateduk} is ${btcPriceObj.bpi.GBP.rate} ${btcPriceObj.bpi.GBP.code}.</li> <br>`)

                $('#disc').text(`*${btcPriceObj.disclaimer}`)
            },

            error: function (error) {
                console.log(error);
            }
        })
    })
});