//Primo esercizio//
//creo la classe utente con il metodo di comparazione tra l'età dei diversi utenti//
class Utente {
    constructor(firstName,lastName,age,location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }
    compareAge = function (e){
        if(this.age > e.age){
            console.log(this.firstName + " " + this.lastName + " is older than " + e.firstName + " " + e.lastName)
        }else if(this.age < e.age){
            console.log(e.firstName + " " + e.lastName + " is older than " + this.firstName + " " + this.lastName);
        }else{
            console.log(this.firstName + " " + this.lastName + " and " + e.firstName + " " + e.lastName +" have the same age.")
        }
    }
}

//Creo diversi oggetti utenti attraverso il costrutto della classe Utente//

const utente1 = new Utente(
    'Gino',
    'Gavarro',
    '37',
    'Sassari',
)

const utente2 = new Utente(
    'Alfio',
    'Perrotta',
    '28',
    'Cagliari'
)
const utente3 = new Utente(
    'Gaspare',
    'Giuffrida',
    '42',
    'Torino'
)
const utente4 = new Utente(
    'Cora',
    'Tanchredi',
    '42',
    'Imola'
)
const utente5 = new Utente(
    'Filippa',
    'Manale',
    '54',
    'Enna'
)

//applico il metodo di comparazione della classe Utente tra i vari oggetti utente mostrando diversi risultati possibilit//
utente1.compareAge(utente2)
utente3.compareAge(utente4)
utente1.compareAge(utente5)
//Secondo esercizio//
//Vado a prendere i valori degli imput//
const petNameInput = document.getElementById('pet-name')
const ownerNameInput = document.getElementById('owner-name')
const spiciesInput = document.getElementById('spicies-name')
const breedInput = document.getElementById('breed-name')
//Creo un Array vuoto//
let pets = []

class Pet {
    constructor(_petName, _ownerName, _spicies, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.spicies = _spicies
        this.breed = _breed
    }
    compareOwner = function(ownerX){
        if(this.ownerName === ownerX){
            return true
        }
    }
}
const renderList = function(){
    const uList = document.getElementById('lista-pet')
    uList.innerHTML =''
    pets.forEach(e => {
     const newLi = document.createElement('li')   
     newLi.innerText = `${e.petName} ${e.spicies} ${e.breed} owner- ${e.ownerName}`
     uList.appendChild(newLi)
    });
}
const formRefence = document.querySelector('form')
formRefence.addEventListener('submit', function(e) {
    e.preventDefault()
    const newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        spiciesInput.value,
        breedInput.value
    )
    pets.push(newPet)
    petNameInput.value = ''
    ownerNameInput.value = ''
    spiciesInput.value = ''
    breedInput.value =''
    renderList()
})