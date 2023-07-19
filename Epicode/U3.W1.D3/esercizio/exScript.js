"use strict";
class TaxSystem {
    constructor(redditoAnnuoLordo, tasseIrpef = 0.17, tasseInps = 0.20) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseIrpef = tasseIrpef;
        this.tasseInps = tasseInps;
    }
}
class AccountTaxSystem extends TaxSystem {
    constructor() {
        super(25000);
        this.codRedd = 78;
    }
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef() * 0.24;
    }
    getTasseInps() {
        return this.redditoAnnuoLordo * this.tasseInps;
    }
    getTasseIrpef() {
        return this.redditoAnnuoLordo * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
let newAccountTaxSystem = new AccountTaxSystem;
console.log(newAccountTaxSystem.getRedditoAnnuoNetto());
console.log(newAccountTaxSystem.getTasseInps());
console.log(newAccountTaxSystem.getTasseIrpef());
console.log(newAccountTaxSystem.getUtileTasse());
