function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmDolar = valorEmRealNumerico * 5; // valor do dolar no dia 06/09/2022
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Dolar é: US$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
    var valorEmEuro = valorEmEuroNumerico * 5.14; // valor do euro no dia 06/09/2022
    var valorFinal = valorEmEuro.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é: € " + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmBitcoin = valorEmDolarNumerico * 0.00173302; // valor do bitcoin no dia 06/09/2022
    var valorFinal = valorEmBitcoin.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Bitcoin é: ₿ " + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
}