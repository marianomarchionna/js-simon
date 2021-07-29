// Un alert() espone 5 numeri generati casualmente.
let numeri = [];
var numeriUtente = [];

while (numeri.length < 5) {
    let numeroGenerato = randomNumber(1, 100);
    if(numeri.includes(numeroGenerato) == false){
        numeri.push(numeroGenerato);
    }
}

alert('I numeri da memorizzare sono ' + numeri);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
alert('Inserisci i numeri che ricordi (non puoi inserire due numeri uguali)')
setTimeout(inserisciNumeri, 2000);


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//funzioni
function randomNumber(min, max) {
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}

function inserisciNumeri() {
    while (numeriUtente.length < 5) {
        let numeroInserito = parseInt(prompt('Inserisci numero:'));
        if(numeriUtente.includes(numeroInserito) == false){
            numeriUtente.push(numeroInserito);
        }
    }
}