// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//utente sceglie tra pari e dispari
const buttonEven = document.querySelector('.button-even');
const buttonUneven = document.querySelector('.button-uneven');

const notEven = document.querySelector('.not-even');
const notUneven = document.querySelector('.not-uneven');

// const gameWinner = document.querySelector('.winner');

let userNumber;
let result;

//chidere all'utente un numero da 1 a 5
buttonEven.addEventListener('click', function() {
    userNumber = prompt('Inserisci un numero pari da 1 a 5:');
    if (userNumber % 2 == 0) {
        notEven.innerHTML = `Corretto! Hai inserito un numero pari.`;
        console.log('L\'utente ha inserito un numero pari.')
    } else {
        console.log('L\'utente ha inserito un numero dispari.')
        notEven.innerHTML = `Il numero che hai inserito non è pari. Riprova.`
    }
    console.log('Numero dell\'utente: ', userNumber);
})

buttonUneven.addEventListener('click', function() {
    userNumber = prompt('Inserisci un numero dispari da 1 a 5:');
    if (userNumber % 2 !== 0) {
        notEven.innerHTML = `Corretto! Hai inserito un numero dispari.`;
        console.log('L\'utente ha inserito un numero dispari.')
    } else {
        console.log('L\'utente ha inserito un numero pari.')
        notUneven.innerHTML = `Il numero che hai inserito non è dispari. Riprova.`
    }
    console.log('Numero dell\'utente: ', userNumber);
});

// generare un numero random per il computer
function randomNumberMachine(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    console.log('Il numero del computer è:', result);
    return result;
};
randomNumberMachine(1, 5);

//sommiamo il numero dell'utente ed il numero del computer
