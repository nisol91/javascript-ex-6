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

setTimeout(function () {
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
    } else {
      console.log('il numero ' + i + ' (' + num[i] + ') ' + ' è stato sbagliato');
      // document.writeln('il numero ' + i + ' (' + num[i] + ') ' + ' è stato sbagliato' + '<br>');
    }
  }
}, 1000);
