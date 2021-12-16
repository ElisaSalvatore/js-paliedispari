//Palindroma
//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma

function palindrome(str) {
    //scompongo la parola inserita nei singoli caratteri
    const arrayValues = userWord.split('');

    //inverto i caratteri della parola inserita
    const reverseArrayValues = arrayValues.reverse();

    //ricompongo la parla con in caratteri invertiti
    const reverseString = reverseArrayValues.join('');

    if (userWord == reverseString) {
        // se la parola, con i caratteri invertiti, è uguale a quella inserita dall'utente allora è palindroma
        console.log('Complimenti! La parola inserita è palindroma.');
    } else {
        //altrimenti non è palindroma
        console.log('La parola inserita NON è palindroma. Riprova.')
    }
}

//chiedo all'utente una parola
const userWord = prompt('Inserisci una parola:');

//richiamo la funzione 
palindrome(userWord);
