class Pizza{
    constructor(public gusto:string){
        this.gusto = gusto;
    }
}
let piazza2 = new Pizza('Margherita');
console.log(piazza2)



class Persona {
    
    constructor(
        public nome:string,
        public cognome:string,
        public anni:number
    ){}
    presentazione(){
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.anni}`
    }

}
let persona = new Persona('Giuseppe', 'Rossi', 20);
console.log(persona.presentazione())
 class Studente extends Persona{

    constructor(nome:string,cognome:string,anni:number,public materie:string[]){
        super(nome,cognome,anni)
    }
    presentazione(): string {
        return super.presentazione() + ` e ho le materie ${this.materie}`
    }
 }
 let studente = new Studente('Giuseppe', 'Rossi', 20, ['Ingegneria Informatica', 'Ingegneria Informatica',]);
 console.log(studente.presentazione())


 //metodi astratti

 abstract class Veicolo{
    abstract vel:number
    constructor(public maxVel:number, public nRuote:number = 4){}
    abstract accelara():void
    abstract frena():void

    stop():void{
        this.vel = 0;
    }
 }

class Bici extends Veicolo{
    constructor(){
        super(2, 40)
    }
    vel: number = 0;
    accelara(): void {
        this.vel += 10;
    }
    frena(): void {
        this.vel -= 10;
    }

}
let bicicletta = new Bici();
console.log(bicicletta)



//interfacce

interface Iuser{
    nome:string;
    cognome:string;
    anni:number;
    presentazione():string;
}

class User implements Iuser{
    constructor(public nome:string, public cognome:string, public anni:number){}
    presentazione():string{
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.anni}`
    }
    }



//Generics
function somma (a:number,b:number):number{
    return a+b;
}

function somma2<T>(a:T,b:T):T{
    return (a as any) + (b as any);
}

console.log(somma2(1,2))

interface KayPair<T,U>{
    kay:T;
    value:U;
}
//tuples
let user:[number, string, boolean] = [1, 'Giuseppe', true];