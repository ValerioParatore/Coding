enum Mesi {
    Gennaio = 0,
    Febbraio,
    Marzo,
    Aprile,
    Maggio,
    Giugno,
}
console.log(Mesi);
enum TipiLibri {
    Romanzo = 'romanzo',
    Fantasia = 'fantasia',
    Biografia = 'biografia'
}

const libro1 :{
    titolo: string,
    anno: number,
    autore: string,
    tipo: string
} = {
    titolo: 'The Lord of the Rings',
    anno: 1939,
    autore: 'J.R.R. Tolkien',
    tipo: TipiLibri.Fantasia
}
console.log(libro1);
//array

let pizze : string[] = [
    'margherita',
    'capricciosa',
    'diavola',
    'mimosa'
]
pizze.push('calabresa');
console.log(pizze);

//custom types
type Pizza ={
    nome: string,
    prezzo: number,
}

let pizzeObj: Pizza[] = [
    {
        nome:'margherita',
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
]
pizzeObj.sort((a,b)=>{
    return a.prezzo - b.prezzo;
})
console.log(pizzeObj);
// function

const somma = function(a:number, b:number){
    return a + b;
}
let res: number = somma(1,2);
console.log(res);
console.log(somma(1,2));

let raddoppia = (n:number):number => n*2;

console.log(raddoppia(10));

//parametri facoltativi


const multiSomma = function(a:number, b:number = 0, c:number = 0){
    return a + b + c;
}
