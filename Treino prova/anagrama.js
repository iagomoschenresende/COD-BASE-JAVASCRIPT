function verificarAnagrama() {
  // Converter as palavras para letras minúsculas
    var palavra1 = prompt('digite a sua primeira palavra')
    var palavra2 = prompt('digite a segunda palavra')
  palavra1 = palavra1.toLowerCase();
  palavra2 = palavra2.toLowerCase();

  // Ordenar as letras das palavras em ordem alfabética
  palavra1 = palavra1.split('').sort().join('');
  palavra2 = palavra2.split('').sort().join('');

  // Verificar se as palavras ordenadas são iguais (são anagramas)
  if(palavra1 === palavra2){
      alert('são anagramas')}
    else{ alert('não sao anagramas')}
}
