const textName = document.getElementById('text-name')
const btnSave = document.getElementById('btn-save')
const btnDelete =  document.getElementById('btn-delete')
const saveNspan = document.getElementById('saved-name')
const saveName = function(e){
    e.preventDefault()

    let newName =  textName.value
    localStorage.setItem('names-memory', newName)
    saveNspan.textContent = 'Nome salvato : ' + newName
    alert('Nome salvato!')
    textName.value = ''
}

btnSave.addEventListener('click', saveName)



const deleteName = function(e){
    e.preventDefault()
    localStorage.removeItem('names-memory')
    saveNspan.textContent = 'Nome Salvato:'
    alert('nome cancellato!')
}

btnDelete.addEventListener('click', deleteName)