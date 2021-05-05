

//Funzioni 

/**
 *  # Genera numeri random 
 * 
 * Funzione che permette di genrerare numeri random in un range di numeri
 * @param {number} min  -Numero del limite inferiore del range di numeri
 * @param {number} max  -Numero del limite superiore del range di numeri
 * @returns  {number}
 */
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//chiedo all'utente di scegliere la difficolta e controllo che abbia inserito un valore giusto
var difficolta = parseInt(prompt("Inserisci il livello della difficoltà [0 = facile / 1 = medio / 2 = difficile]"));
console.log(difficolta);

while (difficolta !== 0 && difficolta !== 1 && difficolta !== 2) {
    alert("Inserisci un livello valdio")
    difficolta = parseInt(prompt("Inserisci il livello della difficoltà [0 = facile / 1 = medio / 2 = difficile]"));
}

/* soluzione piu semplice con i due limiti
while (difficolta < 0 || difficolta > 2) {
    alert("Inserisci un livello valdio")
    difficolta = parseInt(prompt("Inserisci il livello della difficoltà [0 = facile / 1 = medio / 2 = difficile]"));
}
*/
//in base alla difficolta vado a decidere la quantita di numeri
var limite;

if (difficolta === 0) {
    limite = 100;
} else if (difficolta === 1) {
    limite = 80;
} else if (difficolta === 2) {
    limite = 50;
}


//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.

var numeriBomba = [];

while (numeriBomba.length < 16) {
    var numero = randomNumbers(1, limite);
    if (!numeriBomba.includes(numero)) {
        numeriBomba.push(numero);
    }
}
console.log(numeriBomba);



//In seguito deve chiedere all’utente (100 - 16) volte di inserire
//un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.

var possibilita = (limite - 16);
var lista = [];
var punteggio = 0;

do {
    //faccio inserire all'utente il numero
    var user_num = Number(prompt("Inserisci un numero compreso tra 1 e 100!"));

    //controllo che il numero inserito non sia presente tra i numeri vietati
    if (numeriBomba.includes(user_num)) {
        alert("Hai beccato una bomba! il tuo punteggio è : " + punteggio);
    } else if (lista.includes(user_num)) { //controllo che l'utente non inserisca piu volte lo stesso numero
        alert("Numero gia inserito");
    } else if (user_num < 1 || user_num > 100 || isNaN(user_num)) { //cotnrollo che l'utente inserisca un numero valido
        alert("Il numero inserito non e valido");
    } else { //se il numero inserito e valido e non è un numero vietato lo pusho nell'array dei numeri giocati dall'utente
        lista.push(user_num)
        punteggio++
    }

    //se la lunghezza della lista e minore o uguale al numero delle possibilita && il numero inserito non 
    // e un numero bomba allora ripetto il ciclo
} while (lista.length <= possibilita && !numeriBomba.includes(user_num))

//comunico all'utente che ha vinto
if (lista.length === possibilita) {
    alert("Hai vinto! Il tuo punteggio è ; " + punteggio)
}
console.log(lista);
console.log(punteggio);