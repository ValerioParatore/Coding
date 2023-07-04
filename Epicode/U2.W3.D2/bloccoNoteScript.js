let text = document.querySelector('textarea')

let btnLoad = document.getElementById('load')
let btnSave = document.getElementById('save')
let btnReset = document.getElementById('reset')



const save = function(){
    const textAreaContent = text.value
    localStorage.setItem('notepad-memory', textAreaContent)
    alert('Contenuto salvato')
}
btnSave.addEventListener('click', save)

const load = function(){
    const memory = localStorage.getItem('notepad-memory')
    if(memory){
        text.value = memory
    }else{
        alert('Memoria non trovata')
    }
}
btnLoad.addEventListener('click', load)

const reset = function(){
    text.value = ''
    localStorage.removeItem('notepad-memory')
    alert('memoria svuotata')
}
btnReset.addEventListener('click', reset)