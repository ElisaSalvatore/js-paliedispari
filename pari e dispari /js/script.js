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

const gameWinner = document.querySelector('.winner');

let userNumber;
let computerNumber;
let sum;


//chidere all'utente un numero da 1 a 5
//sommiamo il numero dell'utente ed il numero del computer
//decretiamo un vincitore

buttonEven.addEventListener('click', function() {
    userNumber = prompt('Inserisci un numero da 1 a 5:');
    console.log('Numero dell\'utente:', userNumber);

    sum = userNumber + computerNumber;
    
    if (sum % 2 === 0) {
        gameWinner.innerHTML = `La somma è pari. Complimenti, hai vinto!`
    } else {
        gameWinner.innerHTML = `La somma è dispari. Ritenta, sarai più fortunato.!`
    }
});
console.log(sum);

buttonUneven.addEventListener('click', function() {
    userNumber = prompt('Inserisci un numero da 1 a 5:');
    console.log('Numero dell\'utente:', userNumber);

    sum = userNumber + computerNumber;

    if (sum % 2 !== 0) {
        gameWinner.innerHTML = `La somma è dispari. Complimenti, hai vinto!`
    } else {
        gameWinner.innerHTML = `La somma è pari. Ritenta, sarai più fortunato.!`
    }
});
console.log(sum);

// generare un numero random per il computer
function randomNumberMachine(min, max) {
    computerNumber = Math.floor(Math.random() * ((max + 1) - min)) + min;
    console.log('Il numero del computer è:', computerNumber);
    return computerNumber;
};
randomNumberMachine(1, 5);



