abstract class TaxSystem {
    abstract codRedd:number
    constructor(
        public redditoAnnuoLordo:number,
        public tasseIrpef:number = 0.17,
        public tasseInps:number = 0.20  
        ){}
    abstract getUtileTasse(): void
    abstract getTasseInps(): void
    abstract getTasseIrpef():void
    abstract getRedditoAnnuoNetto():void
}

class AccountTaxSystem extends TaxSystem{
    codRedd: number = 78
    constructor(){
        super(25000)
    }
    getUtileTasse(){
        return this.getTasseInps() + this.getTasseIrpef() * 0.24
    }
    getTasseInps(){
        return this.redditoAnnuoLordo * this.tasseInps
    }
    getTasseIrpef(){
        return this.redditoAnnuoLordo * this.tasseIrpef
    }
    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
    }
}
let newAccountTaxSystem = new AccountTaxSystem

console.log(newAccountTaxSystem.getRedditoAnnuoNetto());
console.log(newAccountTaxSystem.getTasseInps());
console.log(newAccountTaxSystem.getTasseIrpef());
console.log(newAccountTaxSystem.getUtileTasse());

