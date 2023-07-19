"use strict";
class Pizza {
    constructor(gusto) {
        this.gusto = gusto;
        this.gusto = gusto;
    }
}
let piazza2 = new Pizza('Margherita');
console.log(piazza2);
class Persona {
    constructor(nome, cognome, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.anni = anni;
    }
    presentazione() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.anni}`;
    }
}
let persona = new Persona('Giuseppe', 'Rossi', 20);
console.log(persona.presentazione());
class Studente extends Persona {
    constructor(nome, cognome, anni, materie) {
        super(nome, cognome, anni);
        this.materie = materie;
    }
    presentazione() {
        return super.presentazione() + ` e ho le materie ${this.materie}`;
    }
}
let studente = new Studente('Giuseppe', 'Rossi', 20, ['Ingegneria Informatica', 'Ingegneria Informatica',]);
console.log(studente.presentazione());
//metodi astratti
class Veicolo {
    constructor(maxVel, nRuote = 4) {
        this.maxVel = maxVel;
        this.nRuote = nRuote;
    }
    stop() {
        this.vel = 0;
    }
}
class Bici extends Veicolo {
    constructor() {
        super(2, 40);
        this.vel = 0;
    }
    accelara() {
        this.vel += 10;
    }
    frena() {
        this.vel -= 10;
    }
}
let bicicletta = new Bici();
console.log(bicicletta);
class User {
    constructor(nome, cognome, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.anni = anni;
    }
    presentazione() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.anni}`;
    }
}
//Generics
function somma(a, b) {
    return a + b;
}
function somma2(a, b) {
    return a + b;
}
console.log(somma2(1, 2));
