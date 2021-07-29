// Un alert() espone 5 numeri generati casualmente.
let numeri = [];
let numeriUtente = [];
let cont = 0;

while (numeri.length < 5) {
    let numeroGenerato = randomNumber(1, 100);
    if(numeri.includes(numeroGenerato) == false){
        numeri.push(numeroGenerato);
    }
}

alert('I numeri da memorizzare sono ' + numeri);


// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
alert('Inserisci i numeri che ricordi (non puoi inserire due numeri uguali)');
setTimeout(inserisciNumeri, 30000);


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
    console.log('I numeri che ti sei ricordato sono: ');
    for(let i = 0; i < 5; i++){
        if(numeri.includes(numeriUtente[i])){
            console.log(numeriUtente[i]);
            cont++;
        }
    }
    console.log('(' + cont + ')');
    console.log('I numeri che dovevi memorizzare memorizzare erano ' + numeri);
}