interface Ismartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    ricarica( euro: number ): void;
    numer404(): string;
    chiamata(min:number): void;
    azzeraChiamate(): void;
} 

class Smartphone implements Ismartphone {
    constructor(
        public carica: number,
        public numeroChiamate: number, 
        public costoMinuto: number = 0.20) { }
    ;
    public registroChiamate: Array<{ID:number, minuti: number, data: string}> = [];

    ricarica(euro: number): void {
        this.carica += euro;
        console.log("E' stata effettuata una ricarica di " + euro + "euro");
        
    }
    numer404(): string {
        return "Il tuo credito residuo è " + this.carica + " euro";
    }
    chiamata(min: number): void {
        if(this.carica <= 0){
            console.log("credito insufficiente");
            
        }else{
            this.carica -= (min * this.costoMinuto);
            this.numeroChiamate++;
            let today: Date = new Date();
            this.registroChiamate.push({ID: Math.floor(Math.random() * 10000000),minuti: min, data: today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + " ore " + today.getHours() + "/" + today.getMinutes()});
            console.log("E' stata appena effettuata una chiamata di durata : " + min + " minuti");
            
        }
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        console.log("chiamate azzerate");
        
    }
    mostraRegistroChiamate(): void {
        console.log(this.registroChiamate);
    }
    filtraRegistroChiamate(data: string): void {
        this.registroChiamate.forEach( el =>{
            if(el.data == data){
                console.log(el);
                return el;
            }
        })        
    }
    
    
}

let utente1 = new Smartphone(20,0);

utente1.ricarica(10);
console.log(utente1.numer404());
utente1.ricarica(50)
utente1.chiamata(10);
console.log(utente1.numer404());
utente1.chiamata(82)
utente1.chiamata(62)
utente1.chiamata(46)
utente1.chiamata(56)
utente1.chiamata(176)
console.log(utente1.numer404());
utente1.chiamata(16)
console.log("Hai effetuato " + utente1.numeroChiamate + " chiamate");
utente1.azzeraChiamate();
console.log("Hai effetuato " + utente1.numeroChiamate + " chiamate");
console.log(utente1.numer404());

utente1.mostraRegistroChiamate();

let utente2 = new Smartphone(10,2);

utente2.ricarica(10);
console.log(utente2.numer404());
utente2.ricarica(50)
utente2.chiamata(10);
console.log(utente2.numer404());
utente2.chiamata(32)
utente2.chiamata(12)
utente2.chiamata(16)
console.log("Hai effetuato " + utente2.numeroChiamate + " chiamate");
utente2.azzeraChiamate();
console.log("Hai effetuato " + utente2.numeroChiamate + " chiamate");
console.log(utente2.numer404());

utente2.mostraRegistroChiamate()

let utente3 = new Smartphone(30,1,0.17);

utente3.ricarica(10);
console.log(utente3.numer404());
utente3.ricarica(50)
utente3.chiamata(10);
console.log(utente3.numer404());
utente3.chiamata(32)
utente3.chiamata(28)
utente3.chiamata(12)
console.log("Hai effetuato " + utente3.numeroChiamate + " chiamate");
utente3.azzeraChiamate();
console.log("Hai effetuato " + utente3.numeroChiamate + " chiamate");
console.log(utente3.numer404());


utente1.filtraRegistroChiamate("21/7/2023 ore 13/25"); //funziona ma... è ottimale?

