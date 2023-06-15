
function numeroprimo() {
    var n = parseFloat(prompt('digite seu número'))
    if (n < 2) {
        alert('Este número não é primo');
        return;
    }
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            alert('Este número não é primo');
            return;
        }
    }
    alert('Este número é primo')



    var a = Math.sqrt(5 * Math.pow(n, 2) + 4);
    var b = Math.sqrt(5 * Math.pow(n, 2) - 4);

    if (a % 1 === 0 || b % 1 === 0) {
        alert('Este número é da sequência de Fibonacci');
        return true;
    } else {
        alert('Este número não é da sequência de Fibonacci');
        return false;
    }


}



