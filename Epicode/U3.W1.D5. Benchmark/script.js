"use strict";
class Smartphone {
    constructor(carica, numeroChiamate, costoMinuto = 0.20) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
    ;
    ricarica(euro) {
        this.carica += euro;
        console.log("E' stata effettuata una ricarica di " + euro + "euro");
    }
    numer404() {
        return "Il tuo credito residuo è " + this.carica + " euro";
    }
    chiamata(min) {
        if (this.carica <= 0) {
            console.log("credito insufficiente");
        }
        else {
            this.carica -= (min * this.costoMinuto);
            this.numeroChiamate++;
            let today = new Date();
            this.registroChiamate.push({ "ID": Math.floor(Math.random() * 10000000), "minuti": min, "Data": today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() });
            console.log("E' stata appena effettuata una chiamata di durata : " + min + " minuti");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("chiamate azzerate");
    }
}
let utente1 = new Smartphone(20, 0);
utente1.ricarica(10);
console.log(utente1.numer404());
utente1.ricarica(50);
utente1.chiamata(10);
console.log(utente1.numer404());
utente1.chiamata(82);
utente1.chiamata(62);
utente1.chiamata(46);
utente1.chiamata(56);
utente1.chiamata(176);
console.log(utente1.numer404());
utente1.chiamata(16);
console.log("Hai effetuato " + utente1.numeroChiamate + " chiamate");
utente1.azzeraChiamate();
console.log("Hai effetuato " + utente1.numeroChiamate + " chiamate");
console.log(utente1.numer404());
console.log(utente1.registroChiamate);
let utente2 = new Smartphone(10, 2);
utente2.ricarica(10);
console.log(utente2.numer404());
utente2.ricarica(50);
utente2.chiamata(10);
console.log(utente2.numer404());
utente2.chiamata(32);
utente2.chiamata(12);
utente2.chiamata(16);
console.log("Hai effetuato " + utente2.numeroChiamate + " chiamate");
utente2.azzeraChiamate();
console.log("Hai effetuato " + utente2.numeroChiamate + " chiamate");
console.log(utente2.numer404());
console.log(utente2.registroChiamate);
let utente3 = new Smartphone(30, 1, 0.17);
utente3.ricarica(10);
console.log(utente3.numer404());
utente3.ricarica(50);
utente3.chiamata(10);
console.log(utente3.numer404());
utente3.chiamata(32);
utente3.chiamata(28);
utente3.chiamata(12);
console.log("Hai effetuato " + utente3.numeroChiamate + " chiamate");
utente3.azzeraChiamate();
console.log("Hai effetuato " + utente3.numeroChiamate + " chiamate");
console.log(utente3.numer404());
console.log(utente3.registroChiamate);
