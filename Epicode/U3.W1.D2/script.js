"use strict";
var Mesi;
(function (Mesi) {
    Mesi[Mesi["Gennaio"] = 0] = "Gennaio";
    Mesi[Mesi["Febbraio"] = 1] = "Febbraio";
    Mesi[Mesi["Marzo"] = 2] = "Marzo";
    Mesi[Mesi["Aprile"] = 3] = "Aprile";
    Mesi[Mesi["Maggio"] = 4] = "Maggio";
    Mesi[Mesi["Giugno"] = 5] = "Giugno";
})(Mesi || (Mesi = {}));
console.log(Mesi);
var TipiLibri;
(function (TipiLibri) {
    TipiLibri["Romanzo"] = "romanzo";
    TipiLibri["Fantasia"] = "fantasia";
    TipiLibri["Biografia"] = "biografia";
})(TipiLibri || (TipiLibri = {}));
const libro1 = {
    titolo: 'The Lord of the Rings',
    anno: 1939,
    autore: 'J.R.R. Tolkien',
    tipo: TipiLibri.Fantasia
};
console.log(libro1);
//array
let pizze = [
    'margherita',
    'capricciosa',
    'diavola',
    'mimosa'
];
pizze.push('calabresa');
console.log(pizze);
let pizzeObj = [
    {
        nome: 'margherita',
        prezzo: 10
    },
    {
        nome: 'capricciosa',
        prezzo: 15
    },
    {
        nome: 'diavola',
        prezzo: 20
    }
];
pizzeObj.sort((a, b) => {
    return a.prezzo - b.prezzo;
});
console.log(pizzeObj);
// function
const somma = function (a, b) {
    return a + b;
};
let res = somma(1, 2);
console.log(res);
console.log(somma(1, 2));
let raddoppia = (n) => n * 2;
console.log(raddoppia(10));
//parametri facoltativi
const multiSomma = function (a, b = 0, c = 0) {
    return a + b + c;
};
