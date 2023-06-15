function MaiorElemento() {
    var matriz = prompt('digite a sua matriz')
    var maiorElemento = matriz[0];

    for (var i = 1; i < matriz.length; i++) {
        if (matriz[i] > maiorElemento) {
            maiorElemento = matriz[i];
        }
    }

    alert(maiorElemento)
}
