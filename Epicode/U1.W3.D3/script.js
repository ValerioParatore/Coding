let TaskForm = document.getElementById('new-task')
TaskForm.addEventListener('submit', function(e){
    e.preventDefault()
    const taskText = document.getElementById('input-task')
    const retriveTaskText = taskText.value 
    let newTaskCard = document.createElement('div')
    newTaskCard.classList.add('task-card')
    newTaskCard.innerHTML = `
    <p>${retriveTaskText}</p>
    `
    const savedTaskDiv = document.getElementById("saved-task")
    savedTaskDiv.appendChild(newTaskCard)



})