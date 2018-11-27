// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati
function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}

var num = [];
for (var i = 0; i < 5; i++) {
  var numb = random_int_number(0, 100);
  alert(numb);
  num.push(numb);
}
console.log(num);


var tempo = 5000 + 1000;
var numero = (tempo/1000);
var timer = setInterval(function () {
  numero -= 1;
  document.getElementById('text').innerHTML = numero;
  console.log(numero);
  if (numero === 0) {
    clearInterval(timer);
  }
}, 1000);

var controllo = setTimeout(function () {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt('Inserisci numero'));
    arr.push(numero)
  }
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num[i]) {
      console.log('il numero ' + i + ' (' + num[i] + ') ' + ' è stato indovinato');
      // document.writeln('il numero ' + i + ' (' + num[i] + ') ' + ' è stato indovinato' + '<br>');
      document.getElementById('array').innerHTML += ('il numero ' + i + ' (' + num[i] + ') ' + ' è stato indovinato' + '<br>');
      //IMPORTANTE: se voglio aggiungere (e NON sovrascrivere!) frasi o risultati nell .innerHTML, la dicitura deve avere ‘+=’ e non solo ‘=’.
    } else {
      console.log('il numero ' + i + ' (' + num[i] + ') ' + ' è stato sbagliato');
      // document.writeln('il numero ' + i + ' (' + num[i] + ') ' + ' è stato sbagliato' + '<br>');
      document.getElementById('result').innerHTML += ('il numero ' + i + ' (' + num[i] + ') ' + ' è stato sbagliato' + '<br>');
    }
  }
  // document.writeln('i numeri di CPU: ' + num + '<br>');
  // document.writeln('i tuoi numeri: ' + arr);
  document.getElementById('n_1').innerHTML = 'i numeri di CPU: ' + num + '<br>';
  document.getElementById('n_2').innerHTML = 'i tuoi numeri: ' + arr;
}, tempo);
