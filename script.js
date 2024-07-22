document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('form').onsubmit = function() {

        fetch("https://open.er-api.com/v6/latest/USD")

        .then((response) => response.json())

        .then((data) => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];

            if(rate !== undefined) {
                document.querySelector('#result') .innerHTML = `1 USD is equal to ${rate.toFixed(2)} ${currency}`;
            } else {
                document.querySelector('#result') .innerHTML = `invalid Currency. try a valid currency againg!`;
            }


        })

        .catch((error) => {
            console.log("Error", error)
        });

        return false;
    };
});