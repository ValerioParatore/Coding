/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//I datatype sono dei valori che si possono assegnare a delle variabili o costanti in javascript. Essi sono principalmente di 3 tipi, ovvero: stringhe, numeri e valori booleani.
//Le stringhe sono semplicemente delle righe di testo le quali vanno scritte sempre tra apici, o singoli o doppi (l'importante è mantenere lo stesso tipo di apice in apertura e chiusura).
//I numeri sono letteralmente valori numerici e vanno scritti senza apici o altre simbologie. In oltre per definire i valori decimali bisogna mettere il punto (.) anzichè la virgola (,)
//I valori buleani invece servono per assegnare un valore di vero(true) o falso (false)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Valerio"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 12 + 20
console.log(n)
/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
 Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
 Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nome = "il tuo nome" 
const saluto = "ciao"
//saluto = 3 

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberX = 4 - x
console.log(numberX)


/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon"
let name2 = "Jhon"

console.log(name1 === name2)

console.log(name2.toLowerCase() === name1)