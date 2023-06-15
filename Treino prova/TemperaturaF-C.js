function converterFemC() {
    var tf = parseFloat(prompt('Digite a temperatura em farenheit(caso seja um número com vírgula utilizar o Ponto para separar números decimais de numeros inteiros'))
    var tc = (tf - 32) / 9
    var tc1 = tc * 5

    if (tc1 >= 30) {
        alert('A temperatura em Celsius é ' + tc1 + ' Esta muito quente')
    }
    if (tc1 >= 15 && tc1 <= 29) {
        alert('A temperatura em Celsius é ' + tc1 + ' Esta de boas')
    }
    if (tc1 < 15) {
        alert('A temperatura em Celsius é ' + tc1 + ' Esta muito frio')
    }



}