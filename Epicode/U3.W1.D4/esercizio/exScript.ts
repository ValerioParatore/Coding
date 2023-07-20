
class Abito {
    constructor(
        public id: number ,
        public codprod:number,
        public collezione: string,
        public capo: string,
        public modello: number,
        public quantita: number,
        public colore: string ,
        public prezzoivaesclusa: number,
        public prezzoivainclusa: number,
        public disponibile: string,
        public saldo: number
    ){}
    getSaldoCapo(){
        return (this.saldo * this.prezzoivainclusa) / 100
    }
    getAcquistaCapo(){
        return this.prezzoivainclusa - this.getSaldoCapo()
    }
}



fetch("starter/Abbigliamento.json")
.then((response:any) => response.json())
.then((data:any) => {
    console.log(data);
    data.forEach((element:any) => {
        let newAbito = new Abito(
            element.id,
            element.codprod,
            element.collezione,
            element.capo,
            element.modello,
            element.quantita,
            element.colore,
            element.prezzoivaesclusa,
            element.prezzoivainclusa,
            element.disponibile,
            element.saldo,)
            console.log("Il "+newAbito.capo + " della collezione " + newAbito.collezione + " è disponibile in " + newAbito.disponibile + " al prezzo già scontato di " + newAbito.getAcquistaCapo());
        })
  });
