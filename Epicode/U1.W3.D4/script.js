
let tabellaDiv = document.getElementById('tabella')
let numeroRandom = document.getElementById('numero-estratto')
let numbersEx = []
let tabellinaDiv = document.getElementById('tabellina')








const getRandomNumber = function(){
    let randomNumber = Math.floor(Math.random()*76) + 1
    return randomNumber
}




const renderGame = function(){
    let numeroEstratto = getRandomNumber()
    numbersEx.push(numeroEstratto)
    numeroRandom.innerText = numeroEstratto
}






const tabellaMaker = function(numberCell){
    for(let i = 0; i<numberCell; i++){
        let cellTabella = document.createElement('div')
        cellTabella.classList.add('cell')
        let cellValue = document.createElement('h3')
        cellValue.innerText = i + 1
        cellTabella.appendChild(cellValue)
        tabellaDiv.appendChild(cellTabella)
      //  if(numeroEstratto[i] === i){
         //   cellTabella.classList('color-epic')
     //   }
    }

}



const tabellinaMaker = function(numberCell){
    for(let i = 0; i<numberCell; i++){
        let cellTabellina = document.createElement('div')
        cellTabellina.classList.add('cell-tabellina')
        let cellValue = document.createElement('h3')
        let space = document.createElement('hr')
        cellValue.innerText = i + 1
        cellTabellina.appendChild(cellValue).appendChild(space)
        tabellinaDiv.appendChild(cellTabellina)
        
    }
}








tabellaMaker(76)