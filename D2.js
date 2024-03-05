/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 5
const number2 = 8

if (number2 > number1) {
  console.log('number 2 è più grande')
} else {
  console.log('number1 è più grande')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number3 = 4

if (number3 !== 5) {
  console.log('not equal')
} else {
  console.log('equal')
}

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
const number4 = 15

if (number4 % 5 === 0) {
  console.log('divisibile per 5')
} else {
  console.log('non divisibile per 5')
}

// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
const number5 = 4
const number6 = 8

if (
  number5 === 8 ||
  number6 === 8 ||
  number5 - number6 === 8 ||
  number5 + number6 === 8
) {
  console.log(true)
} else {
  console.log(false)
}

// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */

let totalShoppingCart = 70
let shippingCost = 10

if (totalShoppingCart > 50) {
  console.log(
    'Hai diritto alla spedizione gratuita! Il tuo totale è',
    totalShoppingCart
  )
} else {
  console.log('Il tuo prezzo da pagare è', totalShoppingCart + shippingCost)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20) / 100
console.log(totalShoppingCart)

if (totalShoppingCart > 50) {
  console.log(
    'Hai diritto alla spedizione gratuita! Il tuo totale è',
    totalShoppingCart
  )
} else {
  console.log('Il tuo prezzo da pagare è', totalShoppingCart + shippingCost)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// /* SCRIVI QUI LA TUA RISPOSTA */
let item1 = 162
let item2 = 2155
let item3 = 12

if (item1 > item2 && item1 > item3 && item2 > item3) {
  console.log(item1, item2, item3)
} else if (item1 > item2 && item1 > item3 && item2 < item3) {
  console.log(item1, item3, item2)
} else if (item2 > item1 && item2 > item3 && item1 > item3) {
  console.log(item2, item1, item3)
} else if (item2 > item1 && item2 > item3 && item1 < item3) {
  console.log(item2, item3, item1)
} else if (item3 > item1 && item3 > item2 && item2 > item1) {
  console.log(item3, item2, item1)
} else if (item3 > item1 && item3 > item2 && item2 < item1) {
  console.log(item3, item1, item2)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const givenNumber = 4
if (typeof givenNumber === 'number') {
  console.log('Il valore fornito è un numero')
} else {
  console.log('Il valore fornito NON è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const evenOrOdd = 3
if (evenOrOdd % 2 === 0) {
  console.log('il numero fornito è pari')
} else {
  console.log('il numero fornito è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
  console.log('Meno di 10')
} else if (val < 5) {
  console.log('Meno di 5')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[me.skills.length - 1]
// così rimuovo ma l'elemento rimosso rimane empty

me.skills.pop()
// così rimuovo del tutto

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let emptyArray = []

emptyArray.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(emptyArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

emptyArray.splice(length - 1, 1, 100)

console.log(emptyArray)
