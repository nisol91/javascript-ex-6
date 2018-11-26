// Il software deve chiedere all’utente il suo nome e il
// sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il
// colore del nome deve essere azzurro o rosa a
// seconda del sesso inserito
var id = prompt('Inserisci nome');
var sesso = prompt('Inserisci sesso');
var testo = document.getElementById('text')
testo.innerHTML = 'Ciao ';
var nome = document.getElementById('name')
nome.innerHTML = id;

if (sesso == 'maschio') {
  // nome.style.color = 'lightblue';
  nome.className = 'blue';
} else if (sesso == 'femmina') {
  // nome.style.color = 'pink';
  nome.className = 'pink';
}
