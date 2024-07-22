document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('form').onsubmit = function() {

        fetch("https://open.er-api.com/v6/latest/USD")

        .then((Response) => {
            return response.json()
        })

        .then((data) => {
            const currency = document.querySelector('#currency').ariaValueMax.toUpperCase();
            const rate = data.rates[currency];
        })

        .catch((error) => {
            console.log("Error", error)
        });

        return false;
    };







});