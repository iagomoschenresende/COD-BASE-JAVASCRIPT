function textoinvertido() {
    var textotoriginal = prompt('Escreva o texto aqui e veja a mágica acontecer.')

    var invertidotexto = textotoriginal.split("").reverse().join("")

    alert(invertidotexto)
}