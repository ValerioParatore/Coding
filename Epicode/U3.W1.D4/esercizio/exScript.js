"use strict";
class Abito {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.saldo * 0.01;
    }
    getAcquistaCapo() {
        return this.prezzoivaesclusa - this.getSaldoCapo();
    }
}
fetch("starter/Abbigliamento.json")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    data.forEach((element) => {
        let newAbito = new Abito(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        console.log("Il " + newAbito.capo + " della collezione " + newAbito.collezione + " è disponibile in " + newAbito.disponibile + " al prezzo già scontato di " + newAbito.getAcquistaCapo());
    });
});
