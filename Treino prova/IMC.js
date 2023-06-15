function imc() {
    var a = parseFloat(prompt('Digite a sua altura em metros (caso seja um número com vírgula utilizar o Ponto para separar números decimais de numeros inteiros)'))
    var p = parseFloat(prompt('Digite a sua peso em kg (caso seja um número com vírgula utilizar o Ponto para separar números decimais de numeros inteiros)'))
    var IMC = p / a ** 2
    alert('O seu imc é ' + IMC)
}