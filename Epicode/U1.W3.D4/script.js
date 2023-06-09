
let tabellaDiv = document.getElementById('tabella')
let numeroRandom = document.getElementById('numero-estratto')
let allNumbers = []
let numbersEx = []
let playersN = []
let tabellinaDiv = document.getElementById('tabellina')
let randomNumber = Math.floor(Math.random()*76) + 1












const tabellaMaker = function(numberCell){
    for(let i = 0; i<numberCell; i++){
        let cellTabella = document.createElement('div')
        cellTabella.classList.add('cell')
        let cellValue = document.createElement('h3')
        cellValue.innerText = i + 1
        let nofCell = parseInt(cellValue.inn)
        allNumbers.push(i)
        numbersEx.forEach(n =>{
            if(n === cellValue.innerText){
                cellTabella.classList('cell.selected ')
            }
        })

        cellTabella.appendChild(cellValue)
        tabellaDiv.appendChild(cellTabella)
    }

}



const tabellinaMaker = function(numberCell){
    for(let i = 0; i<numberCell; i++){
        let rnd = Math.floor(Math.random()*numberCell) + 1
        if(!playersN.includes(rnd)){
            playersN.push(rnd);
        }else {
            i--;
        
        }
        playersN.sort(function (a, b) {
            return a - b;
          });
        let cellTabellina = document.createElement('div')
        cellTabellina.classList.add('cell-tabellina')
        let cellValue = document.createElement('h3')
        let space = document.createElement('hr')
        cellValue.innerText = playersN[rnd]
        cellTabellina.appendChild(cellValue)
        cellTabellina.appendChild(tabellinaDiv)
        
    }
    
}








tabellaMaker(76)



//https://github.com/AlessioDiPretoro/14_23.06.08