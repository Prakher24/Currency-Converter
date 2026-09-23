function convertCurrency() {

    let amount = document.getElementById("amount").value;

    let from = document.getElementById("fromCurrency").value;

    let to = document.getElementById("toCurrency").value;

    let result = document.getElementById("result");

    let rates = {
        USD: {
            INR: 88,
            EUR: 0.85,
            GBP: 0.74
        },

        INR: {
            USD: 0.011,
            EUR: 0.0097,
            GBP: 0.0084
        },

        EUR: {
            USD: 1.17,
            INR: 103,
            GBP: 0.87
        },

        GBP: {
            USD: 1.35,
            INR: 119,
            EUR: 1.15
        }
    };

    if (from === to) {
        result.innerHTML = amount + " " + from + " = " + amount + " " + to;
        return;
    }

    let convertedAmount = amount * rates[from][to];

    result.innerHTML =
        amount + " " + from + " = " +
        convertedAmount.toFixed(2) + " " + to;
}